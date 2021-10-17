#!/bin/bash
cd /home/ubuntu/BowWow/server

export USER=$(aws ssm get-parameters --region ap-northeast-2 --names USER --query Parameters[0].Value | sed 's/"//g')
export DATABASE_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_NAME --query Parameters[0].Value | sed 's/"//g')
export PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export HOST=$(aws ssm get-parameters --region ap-northeast-2 --names HOST --query Parameters[0].Value | sed 's/"//g')
export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')
export REFRESH_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names REFRESH_SECRET --query Parameters[0].Value | sed 's/"//g')
export access=$(aws ssm get-parameters --region ap-northeast-2 --names access --query Parameters[0].Value | sed 's/"//g')
export secret=$(aws ssm get-parameters --region ap-northeast-2 --names secret --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start app.js