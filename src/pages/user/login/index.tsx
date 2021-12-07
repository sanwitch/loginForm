import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Alert, Button, message } from 'antd';
import React, { useState } from 'react';
import { ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
import { useIntl, FormattedMessage, SelectLang } from 'umi';

import styles from './index.less';

const validateFlag = /^[a-zA-Z0-9]{1,20}$/;

const Login: React.FC = () => {
  const [formData, setFromData] = useState({}); // 存放登录数据
  const [btnSubmit, setBtnSubmit] = useState(false); // 是否能够点击登录
  const intl = useIntl();

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      message.success('登录成功')
    } catch (error) {}
  };

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <LoginForm
          initialValues={{
            autoLogin: true
          }}
          onValuesChange={(changeValues: any) => {
            let d = { ...formData, ...changeValues};
            setFromData(d)
            if (d.username && validateFlag.test(d.password)) {
              setBtnSubmit(true)
            }else{
              setBtnSubmit(false)
            }
          }}
          actions={[
            <FormattedMessage
              key="loginWith"
              id="pages.login.loginWith"
              defaultMessage="其他登录方式"
            />,
            <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.icon} />,
            <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.icon} />,
            <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.icon} />,
          ]}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <div className={styles.formTitle}>
            {intl.formatMessage({
              id: 'pages.login.accountLogin.tab',
              defaultMessage: '账户密码登录',
            })}
          </div>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.username.placeholder',
              defaultMessage: '用户名',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.username.required"
                    defaultMessage="请输入用户名!"
                  />
                ),
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={styles.prefixIcon} />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.password.placeholder',
              defaultMessage: '密码',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.password.required"
                    defaultMessage="请输入密码！"
                  />
                ),
              },
              {
                pattern: validateFlag,
                message: (
                  <FormattedMessage
                    id="pages.login.password.pattern"
                    defaultMessage="仅支持20个字符以内的数字与英文"
                  />
                ),
              }
            ]}
          />
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
          </div>
          <Button 
            disabled={!btnSubmit}
            htmlType="submit"
            className="ant-btn ant-btn-primary ant-btn-lg submitBtn" 
            style={{width: "100%"}}
          >
            <span>{intl.formatMessage({
              id: 'pages.login.submit',
              defaultMessage: '登录',
            })}</span>
          </Button>
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
