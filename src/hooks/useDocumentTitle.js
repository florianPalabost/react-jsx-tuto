import { useEffect, useRef } from "react";

/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {string} title - The title to set as the document title.
 * @return {void} This function does not return anything.
 */
export function useDocumentTitle(title) {
    // with ref we can store the original title
    const titleRef = useRef(document.title);

    // only called when title is modified (not called on each render of the component)
    useEffect(() => {
        document.title = title ?? titleRef.current;
    }, [title]);

    useEffect(() => {
        console.log('Hook useDocumentTitle : first only when mounted');
        // const originalTitle = document.title;

        // return call when component unmounted
        return () => {
            // document.title = originalTitle;
            document.title = titleRef.current;
        }
    }, [])

    // the originalTitle is not accesible in the other useEffect : 
    // we can use useRef to store the original title
}