export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-10 flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <p>© {currentYear} Harsh Bhatt. Built with Next.js & 💜</p>
        </footer>
    );
}

