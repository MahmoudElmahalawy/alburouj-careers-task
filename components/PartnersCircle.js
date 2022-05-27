import Image from "next/image";

const PartnersCircle = () => {
	return (
		<div className="partners-circle">
			<ul class="circle-container">
				<li>
					<Image src="/images/partners-logos/shangrila-logo.svg" alt="site logo" width={160} height={160} />
				</li>
				<li>
					<Image src="/images/partners-logos/fanclub-logo.svg" alt="site logo" width={160} height={160} />
				</li>
				<li>
					<Image
						src="/images/partners-logos/the-peninsula-logo.svg"
						alt="site logo"
						width={160}
						height={160}
					/>
				</li>
				<li>
					<Image src="/images/partners-logos/virtuoso-logo.svg" alt="site logo" width={160} height={160} />
				</li>
				<li>
					<Image
						src="/images/partners-logos/belmond-bellini-club-logo.svg"
						alt="site logo"
						width={160}
						height={160}
					/>
				</li>
				<li>
					<Image
						src="/images/partners-logos/the-luxury-circle-logo.svg"
						alt="site logo"
						width={160}
						height={160}
					/>
				</li>
				<li>
					<Image src="/images/partners-logos/stars-logo.svg" alt="site logo" width={160} height={160} />
				</li>
				<li>
					<Image src="/images/partners-logos/rosewood-logo.svg" alt="site logo" width={160} height={160} />
				</li>
			</ul>
		</div>
	);
};

export default PartnersCircle;
