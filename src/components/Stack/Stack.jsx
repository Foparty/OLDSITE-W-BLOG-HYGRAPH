import React from 'react';
import styles from './Stack.module.css';
import { html, css, js, eslint, git, graphql, gulp, jest, markdown, prettier, next, mongodb, mysql, netlify, npm, node, php, postcss, reactjs, sass, sketch, svg, tailwind, swift, typescript, vscode, vite, webpack, wordpress } from '/public/icons/';
import StackItem from '../StackItem/StackItem';

const Stack = () => {
	const techs = [
		{ name: 'html', img: html },
		{ name: 'css', img: css },
		{ name: 'js', img: js },
		{ name: 'reactjs', img: reactjs },
		{ name: 'next', img: next },
		{ name: 'mongodb', img: mongodb },
		{ name: 'wordpress', img: wordpress },
		{ name: 'php', img: php },
		{ name: 'mysql', img: mysql },
		{ name: 'git', img: git },
		{ name: 'sass', img: sass },
		{ name: 'postcss', img: postcss },
		{ name: 'tailwind', img: tailwind },
		{ name: 'eslint', img: eslint },
		{ name: 'prettier', img: prettier },
		{ name: 'graphql', img: graphql },
		// { name: 'gulp', img: gulp },
		// { name: 'jest', img: jest },
		{ name: 'markdown', img: markdown },
		// { name: 'node', img: node },
		// { name: 'netlify', img: netlify },
		{ name: 'npm', img: npm },
		{ name: 'sketch', img: sketch },
		// { name: 'swift', img: swift },
		{ name: 'svg', img: svg },
		// { name: 'typescript', img: typescript },
		{ name: 'vite', img: vite },
		{ name: 'vscode', img: vscode },
		{ name: 'webpack', img: webpack },
	];
	return (
		<>
			<h2 className={styles.title}>Technologies</h2>
			<p className={styles.small}>some technologies that I feel commfortable working with</p>
			<section className={styles.data}>
				{techs.map((item) => {
					return <StackItem key={item.name} name={item.name} img={item.img} />;
				})}
			</section>
		</>
	);
};

export default Stack;
