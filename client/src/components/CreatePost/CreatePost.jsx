import React, { useState } from 'react';
import styles from './CreatePost.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [slug, setSlug] = useState('');
	const [summary, setSummary] = useState('');
	const [content, setContent] = useState('');
	const [files, setFiles] = useState(null);
	const [redirect, setRedirect] = useState(false);

	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link', 'image'],
			['clean'],
		],
	};
	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
	];

	async function createNewPost(ev) {
		const data = new FormData();
		data.set('title', title);
		data.set('slug', slug);
		data.set('summary', summary);
		data.set('content', content);
		data.set('file', files[0]);
		ev.preventDefault();
		// console.log(files);
		const response = await fetch('http://localhost:4000/post', {
			method: 'POST',
			body: data,
			credentials: 'include',
		});
		if (response.ok) {
			setRedirect(true);
		}
	}
	if (redirect) {
		return <Navigate to={'/blog'} />;
	}
	return (
		<section className={styles.data}>
			<h2 className={styles.title}>Create new Post</h2>
			<div className={styles.divide}></div>
			<form className={styles.form} onSubmit={createNewPost}>
				<label className={styles.label} htmlFor='title'>
					title
				</label>
				<input
					className={styles.input}
					id={'title'}
					type='text'
					placeholder={'Title'}
					value={title}
					onChange={(ev) => setTitle(ev.target.value)}
				/>
				<label className={styles.label} htmlFor='slug'>
					slug
				</label>
				<input
					className={styles.input}
					id={'slug'}
					type='text'
					placeholder={'slug'}
					value={slug}
					onChange={(ev) => setSlug(ev.target.value)}
				/>
				<label className={styles.label} htmlFor='summary'>
					summary
				</label>
				<input
					className={styles.input}
					id={'summary'}
					type='summary'
					placeholder={'Summary'}
					value={summary}
					onChange={(ev) => setSummary(ev.target.value)}
				/>
				<input
					className={styles.input}
					type='file'
					// value={files}
					onChange={(ev) => setFiles(ev.target.files)}
				/>
				<ReactQuill
					// className={styles.input}
					value={content}
					modules={modules}
					formats={formats}
					theme={'snow'}
					onChange={(newValue) => setContent(newValue)}
				/>
				<button className={styles.submit}>Create Post</button>
			</form>
		</section>
	);
};

export default CreatePost;
