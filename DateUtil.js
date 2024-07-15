const dateFormatter=new Intl.DateTimeFormat("en-IN",{
    // dateStyle:"medium",
    hour:"numeric",
    minute:"numeric",
    year:"numeric",
    month:"short",
    day:"2-digit",
})

export const formateDate=(date)=> dateFormatter.format(date)