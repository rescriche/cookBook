import React from 'react';
import styles from './header.scss'

class Header extends React.Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle
        } = this.props;

        return (
            <header className={styles.wrapper}>
                {
                    user
                        ? <p>Hello, {user.displayName}</p>
                        : <p>Please sign in.</p>
                }
                {
                    user
                        ? <button onClick={signOut}>Sign out</button>
                        : <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
            </header>
        )
    }
}

export default Header;