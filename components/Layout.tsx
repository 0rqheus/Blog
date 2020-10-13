import styled from 'styled-components';
import Head from 'next/head'

interface LayoutProps {
	children: React.ReactNode
	siteTitle: string
}

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	font-weight: bold;
	font-size: 20px;
	color: white;
	background-color: dodgerblue
`;

const Logo = styled.a`
	font-size: 1.5em;
	margin: 0;
	color: white;
	text-decoration: none;
	cursor: pointer;
`;

const HeaderLink = styled.a`
	color: white;
	text-decoration: none;

	&:hover{
		color: darkslateblue
	}
`;

export default function Layout({ children, siteTitle }: LayoutProps) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Simple blog where you can write your own story"
				/>
				<title>{siteTitle}</title>
			</Head>

			<Header>
				<Logo href="/">Simple Blog</Logo>
				<HeaderLink href="/posts/new">New post</HeaderLink>
			</Header>

			<main>
				{children}
			</main>
		</div>
	)
}