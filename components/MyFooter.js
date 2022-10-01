import { HeartOutlined } from '@ant-design/icons';
import { Footer } from "antd/lib/layout/layout";

function MyFooter() {
    return (
        <Footer
            style={{
                backgroundColor: "#001529",
                color: "#fff",
                padding: "10px 0px",
                textAlign: "center",
                width: "100%",
            }}
        >
            <a href="https://lpython.org/">With <HeartOutlined /> by <a href="https://lcompilers.org/">LCompilers</a>
        </Footer>
    );
}

export default MyFooter;
