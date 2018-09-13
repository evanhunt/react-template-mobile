export function getAuthority() {
    return sessionStorage.getItem('react-template-authority');
}

export function setAuthority(authority) {
    return sessionStorage.setItem('react-template-authority', authority);
}
