import Block from './block';

export default function renderDOM(
	queryId: string,
	component: Block,
) {
	const root = document.getElementById(queryId);
	if (root) {
		root.innerHTML = '';
		root.appendChild(component.getContent());
		return root;
	}
}
