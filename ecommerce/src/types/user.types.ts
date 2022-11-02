interface User {
    firstName: string;
    lastName: string;
    email: string;
    provide: 'firebase' | 'google';
}

export default User