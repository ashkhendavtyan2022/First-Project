import { useState } from "react";

const useHandle = (a) => {
    const[a, seta] = useState(value)

    const handle = () => {
        seta(!a)
    }
    seta(!a)

    return[a, handle]
}

export default useHandle