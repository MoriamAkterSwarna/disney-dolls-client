import { useEffect } from "react"

const useTitle = title =>{
        useEffect(() =>{
            document.title = "Disney Magic | " + title;
        }, [title])
}
export default useTitle;
