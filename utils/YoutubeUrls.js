export function extractYouTubeUrls(casts) {
    const youtubeRegex = /(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+)/g;
    return casts.flatMap(cast => {
        const matches = cast.text.match(youtubeRegex);
        return matches ? matches.map(url => ({
            url,
            embedUrl: url.replace(/(?:watch\?v=|youtu\.be\/)/, 'embed/'),
            text: cast.text,
            author: cast.author.username
        })) : [];
    });
}