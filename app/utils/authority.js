export function getAuthority() {
    return localStorage.getItem('react-template-authority');
}

export function setAuthority(authority) {
    return localStorage.setItem('react-template-authority', authority);
}
