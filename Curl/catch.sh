fileName=jdlogin.html
rm ./$fileName 
rm ./key.txt
curl https://passport.jd.com/new/login.aspx >> $fileName
# eid
# fp
# _t
# loginType
# pubKey
# slideAppId
# useSlideAuthCode

keyArray=(sa_token uuid _t eid fp loginType pubKey useSlideAuthCode)
symbol='"'
for element in ${keyArray[@]}
do
    key=$symbol$element$symbol
    cat $fileName | grep ${key} | awk -F '"' '{print $8 }' >> key.txt
done

index=0
array=()
for line in `cat key.txt`
do 
    array[$index]=$line
    index=$index+1
done 

echo ${array[@]}