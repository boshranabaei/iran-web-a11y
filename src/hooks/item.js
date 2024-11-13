export const Item = 
    (title, content, usage, wrong, right, links) => { return { 
        content: content,
        links: links,
        right: right,
        title: title, 
        wrong: wrong,
        usage: usage
     } }
