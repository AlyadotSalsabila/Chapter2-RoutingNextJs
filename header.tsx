import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-yellow-950 font-bold">
            <nav className="px-6 container mx-auto flex items-center justify-between py-5 text-white text-xl">
                <Link href="/" className="text-4xl font-bold">Alya</Link>
                <ul className="flex space-x-10">
                    <li>
                        <Link href="/" className="hover:text-yellow-100">Home</Link>
                    </li>
                    <li>
                        <Link href="/portofolio" className="hover:text-yellow-100">Portofolio</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-yellow-100">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;