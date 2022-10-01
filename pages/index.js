import { useRouter } from "next/router"
import { useEffect } from "react";

function index() {
    const router = useRouter();
    useEffect(() => {
        router.push("/lpython").then(() => router.reload());
        return () => { }
    }, []);

    return (
        <div>
            LCompilers
        </div>
    );
}

export default index;
