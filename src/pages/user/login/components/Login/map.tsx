import Icon, { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

const svgIcon = () => (
  <svg
    t="1615367647956"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2125"
    width="16"
    height="16"
  >
    <path
      d="M512 64c127.232 0 235.872 21.248 357.888 66.848a85.76 85.76 0 0 1 57.92 75.136l0.192 5.76v340.032c0 160.384-177.28 307.52-377.408 399.744-12.16 5.76-24.544 8.48-38.592 8.48-14.08 0-26.432-2.752-38.368-8.352-196.736-90.72-371.296-234.24-377.472-391.264L96 551.776V211.744c0-36.864 23.712-69.12 57.28-80.608C276.16 85.248 384.768 64 512 64z m0 64c-119.264 0-220.384 19.776-337.152 63.36a21.856 21.856 0 0 0-14.56 17.024L160 211.744v340.032c0 124.864 162.56 259.744 340.672 341.856A24.032 24.032 0 0 0 512 896a24.32 24.32 0 0 0 11.552-2.496c174.464-80.416 334.176-211.712 340.256-334.496l0.192-7.232V211.744c0-9.152-6.016-17.344-15.68-20.64C732.384 147.776 631.264 128 512 128z m160 208v64h-112V640h-64v-240H384v-64h288z"
      p-id="2126"
      fill="currentColor"
    />
  </svg>
);

const VerifyIcon = (props: any) => <Icon component={svgIcon} {...props} />;

export default {
  UserName: {
    props: {
      size: 'large',
      id: 'userName',
      prefix: <UserOutlined className="prefixIcon" />,
      placeholder: 'admin'
    },
    rules: [
      {
        required: true,
        message: 'Please enter username!'
      }
    ]
  },
  Password: {
    props: {
      size: 'large',
      prefix: <LockOutlined className="prefixIcon" />,
      type: 'password',
      id: 'password',
      placeholder: '888888'
    },
    rules: [
      {
        required: true,
        message: 'Please enter password!'
      }
    ]
  },
  Mobile: {
    props: {
      size: 'large',
      prefix: <MobileOutlined className="prefixIcon" />,
      placeholder: 'mobile number'
    },
    rules: [
      {
        required: true,
        message: 'Please enter mobile number!'
      },
      {
        pattern: /^1\d{10}$/,
        message: 'Wrong mobile number format!'
      }
    ]
  },
  Captcha: {
    props: {
      size: 'large',
      prefix: <VerifyIcon className="prefixIcon" />,
      placeholder: 'captcha'
    },
    rules: [
      {
        required: true,
        message: 'Please enter Captcha!'
      }
    ]
  }
};
