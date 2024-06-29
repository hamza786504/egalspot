import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="flex items-center justify-between flex-shrink-0 p-4 border-t max-h-14">
                <div>&copy; Reserved by 2024</div>
                <div className="text-sm">
                    Powered By{" "}
                    <a
                        className="text-blue-400 underline"
                        href="https://github.com/Kamona-WD"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hamza Khalid
                    </a>
                </div>
            </footer>
        </>
    )
}
