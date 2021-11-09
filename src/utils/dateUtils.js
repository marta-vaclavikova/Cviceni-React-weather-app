export const convertTime = (timestamp) => {
    return new Date(timestamp*1000).toLocaleString('cs-CZ',{ hour: 'numeric', minute: 'numeric' }).padStart(5,'0');
}

export const convertDate = (timestamp) => {
    return new Date(timestamp*1000).toLocaleString('en-US',{ weekday: 'long', day: 'numeric', month: 'long' }).padStart(5,'0');
}