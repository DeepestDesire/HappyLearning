question website http://stackoverflow.com/posts/6965086/edit


Apple sort of rearranged/repurposed the fields. 

Going forward, if you look on the Info tab for your Application Target, you should use the "Bundle versions string, short" as your Version (e.g., 3.4.0) and "Bundle version" as your Build (e.g., 500 or 1A500). If you don't see them both, you can add them. Those will map to the proper Version and Build textboxes on the Summary tab; they are the same values.

When viewing the Info tab, if you right-click and select **Show Raw Keys/Values**, you'll see the actual names are `CFBundleShortVersionString` (Version) and `CFBundleVersion` (Build).

The Version is usually used how you appear to have been using it with Xcode 3. I'm not sure on what level you're asking about the Version/Build difference, so I'll answer it philosophically.

There are all sorts of schemes, but a popular one is:

{MajorVersion}.{MinorVersion}.{Revision}

 - **Major version** - Major changes, redesigns, and functionality
   changes
 - **Minor version** - Minor improvements, additions to functionality
 - **Revision** - A patch number for bug-fixes

Then the Build is used separately to indicate the total number of builds for a release or for the entire product lifetime.

Many developers start the Build number at 0, and every time they build they increase the number by one, increasing forever. In my projects, I have a script that automatically increases the build number every time I build. See instructions for that below.

 - Release 1.0.0 might be build 542. It took 542 builds to get to a
   1.0.0 release.
 - Release 1.0.1 might be build 578.
 - Release 1.1.0 might be build 694.
 - Release 2.0.0 might be build 949.

Other developers, including Apple, have a Build number comprised of a major version + minor version + number of builds for the release. These are the actual software version numbers, as opposed to the values used for marketing.

If you go to **Xcode** menu > **About Xcode**, you'll see the Version and Build numbers. If you hit the **More Info...** button you'll see a bunch of different versions. Since the **More Info...** button was removed in Xcode 5, this information is also available from the **Software > Developer** section of the **System Information** app, available by opening **Apple** menu > **About This Mac** > **System Report...**.

For example, Xcode 4.2 (4C139). Marketing version 4.2 is Build major version 4, Build minor version C, and Build number 139. The next release (presumably 4.3) will likely be Build release 4D, and the Build number will start over at 0 and increment from there.

The iPhone Simulator Version/Build numbers are the same way, as are iPhones, Macs, etc.

 - 3.2:	(7W367a)
 - 4.0:	(8A400)
 - 4.1:	(8B117)
 - 4.2:	(8C134)
 - 4.3:	(8H7)


**Update**: By request, here are the steps to create a script that runs each time you build your app in Xcode to read the Build number, increment it, and write it back to the app's `{App}-Info.plist` file. There are optional, additional steps if you want to write your version/build numbers to your `Settings.bundle/Root*.plist` file(s).

This is extended from the how-to article [here][1].

In Xcode 4.2 - 5.0:

 1. Load your Xcode project.
 2. In the left hand pane, click on your project at the very top of the hierarchy. This will load the project settings editor.
 3. On the left-hand side of the center window pane, click on your app under the **TARGETS** heading. You will need to configure this setup for each project target.
 4. Select the **Build Phases** tab.
 5. 
 - In Xcode 4, at the bottom right, click the **Add Build Phase** button and select **Add Run Script**.
 - In Xcode 5, select **Editor** menu > **Add Build Phase** > **Add Run Script Build Phase**.
 6. Drag-and-drop the new **Run Script** phase to move it to just before the **Copy Bundle Resources** phase (when the app-info.plist file will be bundled with your app).
 7. In the new **Run Script** phase, set **Shell**: `/bin/bash`.
 8. Copy and paste the following into the script area for integer build numbers:

        buildNumber=$(/usr/libexec/PlistBuddy -c "Print CFBundleVersion" "$INFOPLIST_FILE")
        buildNumber=$(($buildNumber + 1))
        /usr/libexec/PlistBuddy -c "Set :CFBundleVersion $buildNumber" "$INFOPLIST_FILE"

    As @Bdebeez pointed out, the [Apple Generic Versioning Tool][2] (`agvtool`) is also available. If you prefer to use it instead, then there are a couple things to change first:

 - Select the **Build Settings** tab.
 - Under the **Versioning** section, set the **Current Project Version** to the initial build number you want to use, e.g., **1**.
 - Back on the **Build Phases** tab, drag-and-drop your **Run Script** phase after the **Copy Bundle Resources** phase to avoid a race condition when trying to both build and update the source file that includes your build number. 

    **Note that with the `agvtool` method you may still periodically get failed/canceled builds with no errors. For this reason, I don't recommend using `agvtool` with this script.**
 
    Nevertheless, in your **Run Script** phase, you can use the following script:

        "${DEVELOPER_BIN_DIR}/agvtool" next-version -all

    The `next-version` argument increments the build number (`bump` is also an alias for the same thing), and `-all` updates `Info.plist` with the new build number.

 8. And if you have a Settings bundle where you show the Version and Build, you can add the following to the end of the script to update the version and build. _Note: Change the `PreferenceSpecifiers` values to match your settings. `PreferenceSpecifiers:2` means look at the item at index 2 under the `PreferenceSpecifiers` array in your plist file, so for a 0-based index, that's the 3rd preference setting in the array._

        productVersion=$(/usr/libexec/PlistBuddy -c "Print CFBundleShortVersionString" "$INFOPLIST_FILE")
        /usr/libexec/PlistBuddy -c "Set PreferenceSpecifiers:2:DefaultValue $buildNumber" Settings.bundle/Root.plist
        /usr/libexec/PlistBuddy -c "Set PreferenceSpecifiers:1:DefaultValue $productVersion" Settings.bundle/Root.plist

    If you're using `agvtool` instead of reading the `Info.plist` directly, you can add the following to your script instead:

        buildNumber=$("${DEVELOPER_BIN_DIR}/agvtool" what-version -terse)
        productVersion=$("${DEVELOPER_BIN_DIR}/agvtool" what-marketing-version -terse1)
        /usr/libexec/PlistBuddy -c "Set PreferenceSpecifiers:2:DefaultValue $buildNumber" Settings.bundle/Root.plist
        /usr/libexec/PlistBuddy -c "Set PreferenceSpecifiers:1:DefaultValue $productVersion" Settings.bundle/Root.plist
 9. And if you have a universal app for iPad & iPhone, then you can also set the settings for the iPhone file:

        /usr/libexec/PlistBuddy -c "Set PreferenceSpecifiers:2:DefaultValue $buildNumber" Settings.bundle/Root~iphone.plist    
        /usr/libexec/PlistBuddy -c "Set PreferenceSpecifiers:1:DefaultValue $productVersion" Settings.bundle/Root~iphone.plist


  [1]: http://davedelong.com/blog/2009/04/15/incrementing-build-numbers-xcode
  [2]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/agvtool.1.html