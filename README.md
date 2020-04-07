# heroku-test

## Heroku
*  將 express server 架設在 Heroku 上的筆記
*  Heroku 的預設命令是 npm start ，所以在 package.json 裡面更改
*  Port 要從 process.env.PORT 取

``` bash

heroku login

# 到你的已存在 Repository
cd [your-git-repository]

# 將此 git 加入 Heroku 的專案 [ 填寫要加入的專案  ] 
heroku git:remote -a [Heroku Project Name]

# 確認是否遠端加入成功
git remote -v

git add -A
git commit -m "xxx"
git push

# 若有設定好 npm start 的設定，他會自己跑起來 (再到網站上的 settings => Domains 看網址)
git push heroku master
```