import { toUrl } from './utils.es6'

export default class Template{
	constructor(options){
		this.options = options || {}
	}

	url(match, options){
		let config = options.linkOptions;
		return `<a href="${toUrl(match)}" rel="${config.rel}" target="${config.target}">${match}</a>`;
	}

	smiley(text, code) {
		return ` <span class="icon-emoticon" title="${text}">${code}</span> `;
	}

	emoji(text){
		return `<span class="emoticon emoticon-${text}" title=":${text}:"></span>`;
	}

	basicAudio(match){
		return `<div class="ejs-audio ejs-embed"><audio src="${match}" controls class="video-js ejs-video-js"></audio></div>`
	}

	soundCloud(match, options){
		let config = options.soundCloudOptions;
		return `<div class="ejs-embed">
		<iframe height="160" scrolling="no" src="https://w.soundcloud.com/player/?url=${match}
		&auto_play     = ${config.autoPlay}
		&hide_related  = ${config.hideRelated}
		&show_comments = ${config.showComments}
		&show_user     = ${config.showUser}
		&show_reposts  = ${config.showReposts}
		&visual        = ${config.visual}
		&download      = ${config.download}
		&color         = ${config.themeColor}
		&theme_color   = ${config.themeColor}"></iframe>
		</div>`
	}

	spotify(id){
		return `<div class="ejs-embed"><iframe src="https://embed.spotify.com/?uri=spotify:track:${id}" height="80"></iframe></div>`
	}

	codePen(id, options){
		return `<div class="ejs-embed ejs-codepen"><iframe scrolling="no" height="${options.codeEmbedHeight}" src="${id.replace(/\/pen\//, '/embed/')}/?height=${options.codeEmbedHeight}"></iframe></div>`
	}

	ideone(match, options){
		return `<div class="ejs-ideone ejs-embed"><iframe src="http://ideone.com/embed/${match.split('/')[1]}" frameborder="0" height="${options.codeEmbedHeight}"></iframe></div>`
	}

	jsBin(id, options){
		return `<div class="ejs-jsbin ejs-embed"><iframe height="${options.codeEmbedHeight}" class="jsbin-embed foo" src="http://${id}/embed?html,js,output"></iframe></div>`
	}

	jsFiddle(id, options){
		return `<div class="ejs-embed ejs-jsfiddle"><iframe height="${options.codeEmbedHeight}" src="${id}/embedded"></iframe></div>`
	}

	plunker(id, options){
		return `<div class="ejs-embed ejs-plunker"><iframe class="ne-plunker" src="http://embed.plnkr.co/${id}" height="${options.codeEmbedHeight}"></iframe></div>`
	}

	basicImage(match){
		return `<div class="ejs-image ejs-embed"><div class="ne-image-wrapper"><img src="${match}"/></div></div>`
	}

	flickr(match, dimensions){
		return `<div class="ejs-embed"><div class="ne-image-wrapper"><iframe src="${toUrl(match.split('/?')[0])}/player/" width="${dimensions.width}" height="${dimensions.height}"></iframe></div></div>`
	}

	instagram(match, dimensions){
		return `<div class="ejs-embed ejs-instagram"><iframe src="${toUrl(match.split('/?')[0])}/embed/" height="${dimensions.height}"></iframe></div>`;
	}

	slideShare(html){
		return `<div class="ejs-embed ejs-slideshare">${html}</div>`;
	}

	basicVideo(match){
		return `<div class="ejs-video ejs-embed"><div class="ejs-video-player"><div class="ejs-player"><video src="${match}" class="ejs-video-js video-js" controls></video></div></div></div>`
	}

	dailymotion(id, dimensions){
		return `<div class="ejs-video ejs-embed"><iframe src="http://www.dailymotion.com/embed/video/${id}" height="${dimensions.height}" width="${dimensions.width}"></iframe></div>`
	}

	liveleak(match, dimensions){
		return `<div class="ejs-video ejs-embed"><iframe src="http://www.liveleak.com/e/${match.split('=')[1]}" height="${dimensions.height}" width="${dimensions.width}"></iframe></div>`
	}

	ted(id, dimensions){
		return `<div class="ejs-embed ejs-ted"><iframe src="http://embed.ted.com/talks/${id}.html" height="${dimensions.height}" width="${dimensions.width}"></iframe></div>`
	}

	ustream(id, dimensions){
		return `<div class="ejs-embed ejs-ustream"><iframe src="//www.${id.join('/')}" height="${dimensions.height}" width="${dimensions.width}"></iframe></div>`
	}

	detailsVimeo(data, fullData, embedUrl){
		return `<div class="ejs-video ejs-embed"><div class="ejs-video-preview"><div class="ejs-video-thumb" data-ejs-url="${embedUrl}"><div class="ejs-thumb" style="background-image:url(${data.thumbnail})"></div><i class="fa fa-play-circle-o"></i></div><div class="ejs-video-detail"><div class="ejs-video-title"><a href="${data.url}">${data.title}</a></div><div class="ejs-video-desc">${data.description}</div><div class="ejs-video-stats"><span><i class="fa fa-eye"></i>${data.views}</span><span><i class="fa fa-heart"></i>${data.likes}</span></div></div></div></div>`
	}

	detailsYoutube(data, fullData, embedUrl){
		return `<div class="ejs-video ejs-embed"><div class="ejs-video-preview"><div class="ejs-video-thumb" data-ejs-url="${embedUrl}"><div class="ejs-thumb" style="background-image:url(${data.thumbnail})"></div><i class="fa fa-play-circle-o"></i></div><div class="ejs-video-detail"><div class="ejs-video-title"><a href="${data.url}">${data.title}</a></div><div class="ejs-video-desc">${data.description}</div><div class="ejs-video-stats"><span><i class="fa fa-eye"></i>${data.views}</span><span><i class="fa fa-heart"></i>${data.likes}</span></div></div></div></div>`
	}

	vine(id, options){
		const config = options.vineOptions;
		return `<div class="ejs-vine"><iframe class="ejs-vine-iframe" src="https://vine.co/v/${id}/embed/${config.type}" height="${config.height}" width="${config.width}"></iframe></div>`
	}

	vimeo(url, dimensions){
		return `<div class="ejs-video-player ejs-embed"><iframe src="${url}" frameBorder="0" width="${dimensions.width}" height="${dimensions.height}"></iframe></div>`
	}

	youtube(url, dimensions){
		return `<div class="ejs-video-player ejs-embed"><iframe src="${url}" frameBorder="0" width="${dimensions.width}" height="${dimensions.height}"></iframe></div>`
	}

	openGraph(data, options){
		return `<div class="ejs-embed ejs-ogp"><div class="ejs-ogp-thumb" style="background-image:url(${data.image})"></div><div class="ejs-ogp-details"><div class="ejs-ogp-title"><a href="${data.url}" target="${options.linkOptions.target}">${data.title}</a></div><div class="ejs-ogb-details">${data.description}</div></div></div>`
	}

	github(data, options){
		return `<div class="ejs-embed ejs-github"><div class="ejs-ogp-thumb" style="background-image:url(${data.owner.avatar_url})"></div><div class="ejs-ogp-details"><div class="ejs-ogp-title"><a href="${data.html_url}" target="${options.linkOptions.target}">${data.full_name}</a></div><div class="ejs-ogb-details">${data.description}</div><div class="ejs-github-stats"><span><i class="fa fa-star"></i>${data.stargazers_count}</span><span><i class="fa fa-code-fork"></i>${data.network_count}</span></div></div></div>`
	}
}
