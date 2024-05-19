import {createContext, useContext} from "react"

export const BlogContext = createContext({
    visiblity: true,
    handleVisiblity: () => {}
})

export const BlogContextProvider = BlogContext.Provider

export default function useBlogContext(){
    return useContext(BlogContext)
}