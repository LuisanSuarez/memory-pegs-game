import Link from 'next/link';

export default Header = () => (
    <>
        <Link href="/about">
            <a title="About Page">About Page</a>
        </Link>
        <Link href="/game">
            <a title="Game">Game</a>
        </Link>
        <Link href="/pegs">
            <a title="Pegs">Pegs</a>
        </Link>
    </>
);