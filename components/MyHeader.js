import { HomeOutlined, DownOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from "react";
import { useRouter } from 'next/router';
import HeadMeta from './HeadMeta';

function MyHeader() {
    const router = useRouter();
    const [current, setCurrent] = useState("home")
    const items = [
        {
            label: "LCompilers",
            key: "home",
            icon: <HomeOutlined />,
            onClick: () => { router.push("/lpython").then(() => router.reload()) }
        },
        {
            label: `Available Compilers`,
            key: 'compiler',
            children: [
                {
                    label: "LPython",
                    key: "lpython",
                    onClick: () => { router.push(`/lpython`).then(() => router.reload()) }
                },
                {
                    label: "LFortran",
                    key: "lfortran",
                    onClick: () => { router.push(`/lfortran`).then(() => router.reload()) }
                }
            ],
            icon: <DownOutlined />
        }
    ];
    return (
        <>
            <HeadMeta />
            <Menu theme='dark' selectedKeys={[current]} mode="horizontal" items={items} />
        </>
    );
}

export default MyHeader;
