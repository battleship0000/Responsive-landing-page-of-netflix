// Movie Database with actual poster images and working demo videos
const movieDatabase = {
    trending: [
        {
            id: 1,
            title: "Stranger Things",
            poster: "https://tse4.mm.bing.net/th/id/OIP.XO10AhK6S3QEzWM7AR9oKwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
            year: "2023",
            rating: "TV-14",
            duration: "45min",
            overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        {
            id: 2,
            title: "The Witcher",
            poster: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/the-witcher-netflix-poster.jpg",
            year: "2022",
            rating: "TV-MA",
            duration: "60min",
            overview: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        },
        {
            id: 3,
            title: "Wednesday",
            poster: "https://i.pinimg.com/originals/9b/0b/8e/9b0b8e84f1a210028c3aea3045208f35.jpg",
            year: "2023",
            rating: "TV-14",
            duration: "50min",
            overview: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while navigating her years at Nevermore Academy.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        },
        {
            id: 4,
            title: "Money Heist",
            poster: "https://c8.alamy.com/comp/2BERHY0/poster-money-heist-part-4-2020-credit-netflix-the-hollywood-archive-2BERHY0.jpg",
            year: "2021",
            rating: "TV-MA",
            duration: "70min",
            overview: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        },
        {
            id: 5,
            title: "The Crown",
            poster: "https://tse4.mm.bing.net/th/id/OIP.gW6JoMFwNEC_bYNVP9HMPgHaFf?rs=1&pid=ImgDetMain&o=7&rm=3",
            year: "2023",
            rating: "TV-MA",
            duration: "55min",
            overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        }
    ],
    
    netflixOriginals: [
        {
            id: 6,
            title: "Squid Game",
            poster: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
            year: "2021",
            rating: "TV-MA",
            duration: "60min",
            overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        },
        {
            id: 7,
            title: "Breaking Bad",
            poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
            year: "2020",
            rating: "TV-MA",
            duration: "55min",
            overview: "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's financial future.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        },
        {
            id: 8,
            title: "Ozark",
            poster: "https://i.pinimg.com/originals/db/68/d7/db68d755392545c15188e8e8c67282be.jpg",
            year: "2022",
            rating: "TV-MA",
            duration: "60min",
            overview: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
        }
    ],
    
    action: [
        {
            id: 9,
            title: "Extraction",
            poster: "https://tse2.mm.bing.net/th/id/OIP.fWnbt9GlMJgz69wwMyq46gHaK9?rs=1&pid=ImgDetMain&o=7&rm=3",
            year: "2020",
            rating: "R",
            duration: "116min",
            overview: "A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
        },
        {
            id: 10,
            title: "Red Notice",
            poster: "https://cordcuttersnews.com/wp-content/uploads/2021/12/red-notice-netflix-1.png",
            year: "2021",
            rating: "PG-13",
            duration: "118min",
            overview: "An Interpol agent tracks the world's most wanted art thief in this globe-trotting action comedy.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        }
    ],
    
    comedy: [
        {
            id: 11,
            title: "Business Proposal",
            poster: "https://tse3.mm.bing.net/th/id/OIP.jzhyCxcNfGoEFY-E9T9vMAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            year: "2022",
            rating: "TV-14",
            duration: "22min",
            overview: "A romantic comedy about a woman who goes on a blind date pretending to be her friend, only to discover her date is actually her boss.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
        },
        {
            id: 12,
            title: "F.R.I.E.N.D.S",
            poster: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
            year: "2016",
            rating: "TV-14",
            duration: "22min",
            overview: "Six friends navigate life and love in New York City, sharing laughs and supporting each other through thick and thin.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
        }
    ],
    
    horror: [
        {
            id: 13,
            title: "Death Note",
            poster: "https://tse3.mm.bing.net/th/id/OIP.buWAz0LbY3To0WW-pbZ7mQHaLU?pid=ImgDet&w=184&h=281&c=7&dpr=1.3&o=7&rm=3",
            year: "2020",
            rating: "TV-MA",
            duration: "60min",
            overview: "A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name in it.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
        }
    ],
    
    romance: [
        {
            id: 14,
            title: "The Fragrant Flower Blooms With Dignity",
            poster: "https://www.whats-on-netflix.com/wp-content/uploads/2025/06/The-Fragrant-Flower-Blooms-With-Dignity-netflix-anime-preview.jpg",
            year: "2025",
            rating: "TV-MA",
            duration: "60min",
            overview: "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    ]
};

let currentMovie = null;

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('userLoggedIn')) {
        window.location.href = 'index.html';
        return;
    }
    
    loadMovies('trendingMovies', movieDatabase.trending);
    loadMovies('netflixOriginals', movieDatabase.netflixOriginals);
    loadMovies('actionMovies', movieDatabase.action);
    loadMovies('comedyMovies', movieDatabase.comedy);
    loadMovies('horrorMovies', movieDatabase.horror);
    loadMovies('romanceMovies', movieDatabase.romance);
    
    setupSearch();
    setupNavigation();
});

function loadMovies(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.style.backgroundImage = `url(${movie.poster})`;
        movieCard.innerHTML = `<div class="movie-title">${movie.title}</div>`;
        movieCard.onclick = () => showMovieDetails(movie);
        container.appendChild(movieCard);
    });
}

function showMovieDetails(movie) {
    currentMovie = movie;
    const movieModal = document.getElementById('movieModal');
    if (movieModal) {
        const posterImg = document.getElementById('modalMoviePoster');
        const titleEl = document.getElementById('modalMovieTitle');
        const yearEl = document.getElementById('modalMovieYear');
        const ratingEl = document.getElementById('modalMovieRating');
        const durationEl = document.getElementById('modalMovieDuration');
        const overviewEl = document.getElementById('modalMovieOverview');
        
        if (posterImg) posterImg.src = movie.poster;
        if (titleEl) titleEl.textContent = movie.title;
        if (yearEl) yearEl.textContent = movie.year;
        if (ratingEl) ratingEl.textContent = movie.rating;
        if (durationEl) durationEl.textContent = movie.duration;
        if (overviewEl) overviewEl.textContent = movie.overview;
        
        movieModal.style.display = 'block';
    }
}

function playMovie() {
    if (currentMovie) {
        const videoModal = document.getElementById('videoModal');
        const movieVideo = document.getElementById('movieVideo');
        if (videoModal && movieVideo) {
            movieVideo.src = currentMovie.videoUrl;
            videoModal.style.display = 'block';
            const movieModal = document.getElementById('movieModal');
            if (movieModal) movieModal.style.display = 'none';
        }
    }
}

function addToMyList() {
    if (currentMovie) {
        let myList = JSON.parse(localStorage.getItem('myList') || '[]');
        if (!myList.find(movie => movie.id === currentMovie.id)) {
            myList.push(currentMovie);
            localStorage.setItem('myList', JSON.stringify(myList));
            alert('Added to your list!');
        } else {
            alert('Already in your list!');
        }
    }
}

function closeMovieModal() {
    const movieModal = document.getElementById('movieModal');
    if (movieModal) movieModal.style.display = 'none';
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const movieVideo = document.getElementById('movieVideo');
    if (videoModal) videoModal.style.display = 'none';
    if (movieVideo) {
        movieVideo.pause();
        movieVideo.src = '';
    }
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const allMovies = [
        ...movieDatabase.trending,
        ...movieDatabase.netflixOriginals,
        ...movieDatabase.action,
        ...movieDatabase.comedy,
        ...movieDatabase.horror,
        ...movieDatabase.romance
    ];
    
    const searchResults = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    
    document.querySelectorAll('.movie-section').forEach(section => {
        section.style.display = 'none';
    });
    
    if (searchResults.length > 0) {
        const searchSection = document.createElement('div');
        searchSection.className = 'movie-section';
        searchSection.innerHTML = `
            <h2>Search Results for "${searchInput.value}"</h2>
            <div class="movie-row" id="searchResults"></div>
        `;
        
        const moviesContainer = document.querySelector('.movies-container');
        if (moviesContainer) {
            moviesContainer.insertBefore(searchSection, moviesContainer.firstChild);
            loadMovies('searchResults', searchResults);
        }
    } else {
        alert('No movies found!');
        document.querySelectorAll('.movie-section').forEach(section => {
            section.style.display = 'block';
        });
    }
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const targetSection = link.getAttribute('href');
            if (targetSection) {
                scrollToSection(targetSection.substring(1));
            }
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function loadMyList() {
    const myList = JSON.parse(localStorage.getItem('myList') || '[]');
    const myListContainer = document.getElementById('myListMovies');
    
    if (myListContainer) {
        if (myList.length === 0) {
            myListContainer.innerHTML = '<p style="text-align: center; color: #999;">Your list is empty. Add movies to see them here!</p>';
        } else {
            loadMovies('myListMovies', myList);
        }
    }
}

function showCategory(category) {
    document.querySelectorAll('.movie-section').forEach(section => {
        section.style.display = 'none';
    });
    
    switch(category) {
        case 'trending':
            const trendingSection = document.getElementById('trendingSection');
            if (trendingSection) trendingSection.style.display = 'block';
            break;
        case 'originals':
            const originalsSection = document.getElementById('originalsSection');
            if (originalsSection) originalsSection.style.display = 'block';
            break;
        case 'action':
            const actionSection = document.getElementById('actionSection');
            if (actionSection) actionSection.style.display = 'block';
            break;
        case 'comedy':
            const comedySection = document.getElementById('comedySection');
            if (comedySection) comedySection.style.display = 'block';
            break;
        case 'horror':
            const horrorSection = document.getElementById('horrorSection');
            if (horrorSection) horrorSection.style.display = 'block';
            break;
        case 'romance':
            const romanceSection = document.getElementById('romanceSection');
            if (romanceSection) romanceSection.style.display = 'block';
            break;
        case 'mylist':
            const myListSection = document.getElementById('myListSection');
            if (myListSection) {
                myListSection.style.display = 'block';
                loadMyList();
            }
            break;
        default:
            document.querySelectorAll('.movie-section').forEach(section => {
                section.style.display = 'block';
            });
            break;
    }
}
