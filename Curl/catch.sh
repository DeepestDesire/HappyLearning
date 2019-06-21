fileName=jdlogin.html
rm ./$fileName
curl https://passport.jd.com/new/login.aspx >> $fileName
# eid
# fp
# _t
# loginType
# pubKey
# slideAppId
# useSlideAuthCode

keyArray=(sa_token uuid eid fp _t  loginType pubKey)
symbol='"'
for element in ${keyArray[@]}
#也可以写成for element in ${array[*]}
do
    key=$symbol$element$symbol
    cat $fileName | grep ${key} | awk -F '"' '{print $8 }'
done

