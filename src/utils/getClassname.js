export default function getClassname(id) {
    if (id % 5 === 0) {
        return "image--big"
    } else if (id % 6 === 0) {
        return "image--wide"
    } else {
        return "image"
    }
}