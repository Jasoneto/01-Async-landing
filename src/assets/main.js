const API = 'https://youtube-v311.p.rapidapi.com/activities/?part=snippet&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=5';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1a59dc140msh3b4ad45766bc3e1p1bd4a7jsn6bf3a9b5c074',
		'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
	}
};

async function fetchData(urlApi)  {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
        </div>
        </div>
        `).slice[0,4].join('')}

        `;
    } catch {

    }
}) ();