

export default function Footer() {
	return (
		<>
			<div className="footer-section">

				<div className="first border-t-2 border-gray-300 dark:border-gray-700 pb-8 pt-6 px-2 md:px-8 lg:px-24 xl:px-48 flex flex-col md:flex-row justify-between items-start md:items-center align-top gap-6">
					<div className="name">
						<h2 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">TypeArcade</h2>
						<h4>Master your typing skills</h4>

					</div>
					<div className="quick">
						<h2 className="text-xl font-bold text-gray-500">Quick Links</h2>
						<ul className="flex flex-col gap-2  mt-2 text-gray-600 dark:text-white">
							<li><a href ="/" className="font-normal text-sm">Home</a></li>
							<li><a href="/about" className="font-normal text-sm">About</a></li>
							<div className="font-normal text-sm">
								<a href="/contact">Contact</a>
							</div>
						</ul>
					</div>
					<div className="connect">
						<h2 className="text-xl font-bold text-gray-500">Connect with Us</h2>
						<div className="flex gap-4 mt-2">
							<a href="https://twitter.com/typearcade" target="_blank" rel="noopener noreferrer">
								<svg className="w-6 h-6 text-gray-600 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178-.005-.355-.02-.53A8.348 8.348 0 0022 9.713a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 013.164 8.15a4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 13v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>					<a href="https://facebook.com/typearcade" target="_blank" rel="noopener noreferrer"><svg className="w-6 h-6 text-gray-600 dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .593 0 1.326v21.348C0 23.407.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.324-.593 1.324-1.326V1.326C24 .593 23.403 0 22.675 0z" /></svg></a>
							<a href="https://instagram.com/typearcade" target="_blank" rel="noopener noreferrer"><svg className="w-6 h-6 text-gray-600 dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.5a5.75 5.75 0 110 11.5 5.75 5.75 0 010-11.5zm0 1.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5z" /></svg></a>
						</div>
					</div>
				
				</div>
				<div className="second mt-6">
					<div className="legal mt-6 md:mt-0  align-center text-center md:text-center px-2 md:px-8 lg:px-24 xl:px-48 pb-4">
				<p className="text-sm text-gray-600 dark:text-gray-400">&copy; 2026 TypeArcade. All rights reserved.</p>
				<p className="text-sm text-gray-600 dark:text-gray-400">Designed with ❤️ by Manish</p>
			</div>
				</div>
			</div>
		</>
	)
}