const songs = [
  {
    id: 1,
    title: "Tum Se Hi",
    artist: "Mohit Chauhan",
    album: "Jab We Met",
    poster: "img/1.jpg",
    audio: "audio/1.mp3",
    lyrics: "Tum Se Hi din hota hai Surmayi shaam aati hai...",
    durationStr: "5:23",
  },
  {
    id: 2,
    title: "Ye Ishq Hai",
    artist: "Shreya Ghoshal",
    album: "Jab We Met",
    poster: "img/2.jpg",
    audio: "audio/2.mp3",
    lyrics: "Haan hai koi toh wajah, jo jeena aasan lage...",
    durationStr: "4:43",
  },
  {
    id: 3,
    title: "Aaromal",
    artist: "Vishal Chandrashekhar",
    album: "Sita Ramam",
    poster: "img/3.jpg",
    audio: "audio/3.mp3",
    lyrics: "Aaromaley nin chiriyil...",
    durationStr: "3:45",
  },
  {
    id: 4,
    title: "Dil Dhadakne Do",
    artist: "Joi Barua",
    album: "Zindagi Na Milegi Dobara",
    poster: "img/4.jpg",
    audio: "audio/4.mp3",
    lyrics: "Chalo na dhoondein shehar naya...",
    durationStr: "3:51",
  },
  {
    id: 5,
    title: "Sage",
    artist: "Ritviz",
    album: "Sage EP",
    poster: "img/5.jpg",
    audio: "audio/5.mp3",
    lyrics: "Kyun ye baatein hain...",
    durationStr: "3:48",
  },
  {
    id: 6,
    title: "Starboy",
    artist: "The Weeknd ft. Daft Punk",
    album: "Starboy",
    poster: "img/6.jpg",
    audio: "audio/6.mp3",
    lyrics: "Look what you've done, I'm a motherf***in' starboy...",
    durationStr: "3:50",
  },
  {
    id: 7,
    title: "Agar Tum Saath Ho",
    artist: "Arijit Singh & Alka Yagnik",
    album: "Tamasha",
    poster: "img/7.jpg",
    audio: "audio/7.mp3",
    lyrics: "Pal bhar thehar jaao, dil ye sambhal jaaye...",
    durationStr: "5:41",
  },
  {
    id: 8,
    title: "Suna Hai",
    artist: "Neha Kakkar",
    album: "Sanak",
    poster: "img/8.jpg",
    audio: "audio/8.mp3",
    lyrics: "Suna hai tere dil pe mera kahin na kahin naam likha hai...",
    durationStr: "4:14",
  },
  {
    id: 9,
    title: "Dilbar",
    artist: "Neha Kakkar, Dhvani & Ikka",
    album: "Satyameva Jayate",
    poster: "img/9.jpg",
    audio: "audio/9.mp3",
    lyrics: "Chadhta nahi rang dooja...",
    durationStr: "3:04",
  },
  {
    id: 10,
    title: "Duniyaa",
    artist: "Akhil & Dhvani Bhanushali",
    album: "Luka Chuppi",
    poster: "img/10.jpg",
    audio: "audio/10.mp3",
    lyrics: "Bulaave tujhe yaar aaj meri galiyan...",
    durationStr: "3:42",
  },
  {
    id: 11,
    title: "Lagdi Lahore Di",
    artist: "Guru Randhawa & Tulsi Kumar",
    album: "Street Dancer 3D",
    poster: "img/11.jpg",
    audio: "audio/11.mp3",
    lyrics: "Kala kala kajal kardi ve...",
    durationStr: "3:35",
  },
  {
    id: 12,
    title: "Putt Jatt Da",
    artist: "Diljit Dosanjh",
    album: "Putt Jatt Da",
    poster: "img/12.jpg",
    audio: "audio/12.mp3",
    lyrics: "Ho karke shokeeni billo aawan tere pichhe...",
    durationStr: "3:10",
  },
  {
    id: 13,
    title: "Baarishein",
    artist: "Atif Aslam",
    album: "Baarishein",
    poster: "img/13.jpg",
    audio: "audio/13.mp3",
    lyrics: "Haule se dheeme se...",
    durationStr: "4:32",
  },
  {
    id: 14,
    title: "Vaaste",
    artist: "Dhvani Bhanushali & Nikhil D'Souza",
    album: "Vaaste",
    poster: "img/14.jpg",
    audio: "audio/14.mp3",
    lyrics: "Vaaste jaan bhi doon...",
    durationStr: "3:16",
  },
  {
    id: 15,
    title: "Lut Gaye",
    artist: "Jubin Nautiyal",
    album: "Lut Gaye",
    poster: "img/15.jpg",
    audio: "audio/15.mp3",
    lyrics: "Aankh uthi mohabbat ne angrai li...",
    durationStr: "4:58",
  },
];

const artists = [
  { name: "Arijit Singh", image: "img/arjit.jpg", role: "Artist" },
  { name: "Alan Walker", image: "img/alan.jpg", role: "Artist" },
  { name: "Atif Aslam", image: "img/atif.jpg", role: "Artist" },
  { name: "Guru Randhawa", image: "img/guru.jpg", role: "Artist" },
  { name: "Dhvani Bhanushali", image: "img/dhvani.jpg", role: "Artist" },
  { name: "Diljit Dosanjh", image: "img/Diljit_Dosanjh.jpg", role: "Artist" },
  { name: "Jubin Nautiyal", image: "img/jubin Nautiyal.jpg", role: "Artist" },
  { name: "Neha Kakkar", image: "img/neha.jpg", role: "Artist" },
  { name: "Justin Bieber", image: "img/justin-bieber-lede.jpg", role: "Artist" },
  { name: "Honey Singh", image: "img/honey.jpg", role: "Artist" },
  { name: "Akhil", image: "img/akhil.jpg", role: "Artist" },
];

const audio = new Audio();
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0;
let previousVolume = 0.5;
let isDraggingSeek = false;
let likedSongIds = new Set();
let currentSongList = [...songs];

try {
  const savedLikes = localStorage.getItem("spotify_liked_tracks");
  if (savedLikes) {
    likedSongIds = new Set(JSON.parse(savedLikes));
  }
} catch (e) {
  console.warn("Storage not available:", e);
}

const masterPlay = document.getElementById("masterPlay");
const masterPlayIcon = document.getElementById("masterPlayIcon");
const prevBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");

const playerThumb = document.getElementById("player-thumb");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const playerHeart = document.getElementById("player-heart");
const playerHeartIcon = document.getElementById("player-heart-icon");
const waveVisualizer = document.getElementById("wave-visualizer");

const currentStart = document.getElementById("currentStart");
const currentEnd = document.getElementById("currentEnd");
const seek = document.getElementById("seek");
const progressFill = document.getElementById("progress-fill");
const progressThumb = document.getElementById("progress-thumb");

const volIcon = document.getElementById("vol_icon");
const volIconGlyph = document.getElementById("vol_icon_glyph");
const vol = document.getElementById("vol");
const volFill = document.getElementById("vol-fill");
const volThumb = document.getElementById("vol-thumb");

const greetingText = document.getElementById("greeting-text");
const quickGrid = document.getElementById("quick-grid");
const popularCardsCarousel = document.getElementById("popular-cards-carousel");
const artistsCarousel = document.getElementById("artists-carousel");
const tracklistRows = document.getElementById("tracklist-rows");
const tracklistTitle = document.getElementById("tracklist-title");

const searchInput = document.getElementById("search-input");
const searchClear = document.getElementById("search-clear");

const heroPlayBtn = document.getElementById("hero-play-btn");
const heroFollowBtn = document.getElementById("hero-follow-btn");
const heroTitle = document.getElementById("hero-title");
const heroDesc = document.getElementById("hero-desc");

const likedCountMeta = document.getElementById("liked-count-meta");
const sidebarLikedRow = document.getElementById("sidebar-liked-songs");
const sidebarAllRow = document.getElementById("sidebar-all-songs");
const filterChips = document.querySelectorAll(".filter-chips .chip");
const navHome = document.getElementById("nav-home");
const navSearch = document.getElementById("nav-search");
const brandHome = document.getElementById("brand-home");

const popLeft = document.getElementById("pop-left");
const popRight = document.getElementById("pop-right");
const artistLeft = document.getElementById("artist-left");
const artistRight = document.getElementById("artist-right");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const mainView = document.getElementById("main-view");

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");
const spotifySidebar = document.getElementById("spotify-sidebar");
const mobileNavHome = document.getElementById("mobile-nav-home");
const mobileNavSearch = document.getElementById("mobile-nav-search");
const mobileNavLibrary = document.getElementById("mobile-nav-library");

function openMobileSidebar() {
  if (spotifySidebar) spotifySidebar.classList.add("mobile-open");
  if (sidebarBackdrop) sidebarBackdrop.classList.add("active");
  document.querySelectorAll(".mobile-nav-item").forEach((n) => n.classList.remove("active"));
  if (mobileNavLibrary) mobileNavLibrary.classList.add("active");
}

function closeMobileSidebar() {
  if (spotifySidebar) spotifySidebar.classList.remove("mobile-open");
  if (sidebarBackdrop) sidebarBackdrop.classList.remove("active");
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function loadSong(index, autoPlay = true) {
  if (index < 0) index = 0;
  if (index >= songs.length) index = songs.length - 1;

  currentSongIndex = index;
  const song = songs[currentSongIndex];

  audio.src = song.audio;
  playerThumb.src = song.poster;
  playerTitle.innerText = song.title;
  playerArtist.innerText = song.artist;
  currentEnd.innerText = song.durationStr || "0:00";

  updateHeartState();
  syncAllUIActiveStates();

  if (autoPlay) {
    playSong();
  } else {
    pauseSong();
  }
}

function playSong() {
  audio
    .play()
    .then(() => {
      isPlaying = true;
      masterPlayIcon.classList.remove("bi-play-fill");
      masterPlayIcon.classList.add("bi-pause-fill");
      masterPlay.setAttribute("title", "Pause");
      waveVisualizer.classList.add("active");
      syncAllUIActiveStates();
      updateHeroButtonState();
    })
    .catch((err) => {
      console.warn("Audio play interrupted:", err);
    });
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  masterPlayIcon.classList.add("bi-play-fill");
  masterPlayIcon.classList.remove("bi-pause-fill");
  masterPlay.setAttribute("title", "Play");
  waveVisualizer.classList.remove("active");
  syncAllUIActiveStates();
  updateHeroButtonState();
}

function togglePlay() {
  if (!audio.src) {
    loadSong(currentSongIndex, true);
    return;
  }
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function playNext() {
  if (isShuffle) {
    let nextIndex = Math.floor(Math.random() * songs.length);
    if (songs.length > 1 && nextIndex === currentSongIndex) {
      nextIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(nextIndex, true);
  } else {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    loadSong(nextIndex, true);
  }
}

function playPrevious() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    playSong();
    return;
  }
  const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(prevIndex, true);
}

function handleSongEnd() {
  if (repeatMode === 2) {
    audio.currentTime = 0;
    playSong();
  } else if (repeatMode === 1) {
    playNext();
  } else {
    if (currentSongIndex < songs.length - 1 || isShuffle) {
      playNext();
    } else {
      pauseSong();
      audio.currentTime = 0;
    }
  }
}

audio.addEventListener("timeupdate", () => {
  if (isDraggingSeek || isNaN(audio.duration) || audio.duration === 0) return;

  const current = audio.currentTime;
  const duration = audio.duration;
  const progressPercent = (current / duration) * 100;

  currentStart.innerText = formatTime(current);
  currentEnd.innerText = formatTime(duration);

  seek.value = progressPercent;
  progressFill.style.width = `${progressPercent}%`;
  progressThumb.style.left = `${progressPercent}%`;
});

audio.addEventListener("loadedmetadata", () => {
  if (!isNaN(audio.duration)) {
    currentEnd.innerText = formatTime(audio.duration);
  }
});

audio.addEventListener("ended", handleSongEnd);

seek.addEventListener("input", (e) => {
  isDraggingSeek = true;
  const percent = e.target.value;
  progressFill.style.width = `${percent}%`;
  progressThumb.style.left = `${percent}%`;
  if (!isNaN(audio.duration)) {
    currentStart.innerText = formatTime((percent / 100) * audio.duration);
  }
});

seek.addEventListener("change", (e) => {
  if (!isNaN(audio.duration)) {
    audio.currentTime = (e.target.value / 100) * audio.duration;
  }
  isDraggingSeek = false;
});

function setVolume(valuePercent) {
  const volVal = Math.max(0, Math.min(100, valuePercent));
  vol.value = volVal;
  volFill.style.width = `${volVal}%`;
  volThumb.style.left = `${volVal}%`;
  audio.volume = volVal / 100;

  volIconGlyph.className = "bi";
  if (volVal === 0) {
    volIconGlyph.classList.add("bi-volume-mute-fill");
  } else if (volVal < 50) {
    volIconGlyph.classList.add("bi-volume-down-fill");
  } else {
    volIconGlyph.classList.add("bi-volume-up-fill");
  }
}

vol.addEventListener("input", (e) => {
  setVolume(e.target.value);
  if (e.target.value > 0) {
    previousVolume = e.target.value / 100;
  }
});

volIcon.addEventListener("click", () => {
  if (audio.volume > 0) {
    previousVolume = audio.volume;
    setVolume(0);
  } else {
    setVolume(previousVolume ? previousVolume * 100 : 50);
  }
});

masterPlay.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrevious);

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
  shuffleBtn.setAttribute("title", isShuffle ? "Disable shuffle" : "Enable shuffle");
});

repeatBtn.addEventListener("click", () => {
  repeatMode = (repeatMode + 1) % 3;
  const icon = repeatBtn.querySelector("i");
  if (repeatMode === 0) {
    repeatBtn.classList.remove("active");
    icon.className = "bi bi-repeat";
    repeatBtn.setAttribute("title", "Enable repeat");
  } else if (repeatMode === 1) {
    repeatBtn.classList.add("active");
    icon.className = "bi bi-repeat";
    repeatBtn.setAttribute("title", "Repeat all songs");
  } else {
    repeatBtn.classList.add("active");
    icon.className = "bi bi-repeat-1";
    repeatBtn.setAttribute("title", "Repeat current song");
  }
});

function toggleLikeSong(songId) {
  if (likedSongIds.has(songId)) {
    likedSongIds.delete(songId);
  } else {
    likedSongIds.add(songId);
  }

  try {
    localStorage.setItem("spotify_liked_tracks", JSON.stringify(Array.from(likedSongIds)));
  } catch (e) {
    console.warn("Storage error:", e);
  }

  updateLikedCount();
  updateHeartState();
  syncAllUIActiveStates();
}

function updateLikedCount() {
  const count = likedSongIds.size;
  likedCountMeta.innerText = `Playlist • ${count} ${count === 1 ? "song" : "songs"}`;
}

function updateHeartState() {
  const currentSong = songs[currentSongIndex];
  if (!currentSong) return;

  const isLiked = likedSongIds.has(currentSong.id);
  playerHeart.classList.toggle("liked", isLiked);
  playerHeartIcon.className = isLiked ? "bi bi-heart-fill" : "bi bi-heart";

  if (currentSong.id === 1) {
    heroFollowBtn.classList.toggle("following", isLiked);
    heroFollowBtn.innerHTML = isLiked
      ? '<i class="bi bi-heart-fill"></i> Saved in Library'
      : '<i class="bi bi-heart"></i> Save to Favorites';
  }
}

playerHeart.addEventListener("click", () => {
  const song = songs[currentSongIndex];
  if (song) toggleLikeSong(song.id);
});

function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "Good evening";
  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon";
  }
  greetingText.innerText = greeting;
}

function renderQuickGrid() {
  const quickIndices = [0, 5, 6, 8, 10, 13];
  quickGrid.innerHTML = "";

  quickIndices.forEach((songIdx) => {
    const song = songs[songIdx];
    if (!song) return;

    const card = document.createElement("div");
    card.className = "quick-card";
    card.dataset.songIndex = songIdx;

    card.innerHTML = `
      <img src="${song.poster}" alt="${song.title}" />
      <span>${song.title}</span>
      <button class="quick-play-btn" title="Play ${song.title}">
        <i class="bi bi-play-fill"></i>
      </button>
    `;

    card.addEventListener("click", () => {
      if (currentSongIndex === songIdx && isPlaying) {
        pauseSong();
      } else {
        loadSong(songIdx, true);
      }
    });

    quickGrid.appendChild(card);
  });
}

function renderPopularCards(songsList) {
  popularCardsCarousel.innerHTML = "";

  if (songsList.length === 0) {
    popularCardsCarousel.innerHTML = `<div style="color:var(--text-subdued); padding: 20px;">No songs match your search.</div>`;
    return;
  }

  songsList.forEach((song) => {
    const songIdx = songs.findIndex((s) => s.id === song.id);
    const card = document.createElement("div");
    card.className = "song-card";
    card.dataset.songIndex = songIdx;

    const isThisPlaying = currentSongIndex === songIdx && isPlaying;
    if (isThisPlaying) card.classList.add("playing");

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${song.poster}" alt="${song.title}" />
        <button class="floating-play-btn" title="Play ${song.title}">
          <i class="bi ${isThisPlaying ? "bi-pause-fill" : "bi-play-fill"}"></i>
        </button>
      </div>
      <div class="card-info">
        <span class="card-title">${song.title}</span>
        <span class="card-subtitle">${song.artist}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      if (currentSongIndex === songIdx && isPlaying) {
        pauseSong();
      } else {
        loadSong(songIdx, true);
      }
    });

    popularCardsCarousel.appendChild(card);
  });
}

function renderArtists() {
  artistsCarousel.innerHTML = "";

  artists.forEach((artist) => {
    const card = document.createElement("div");
    card.className = "artist-card";

    card.innerHTML = `
      <div class="artist-avatar-wrapper">
        <img src="${artist.image}" alt="${artist.name}" />
      </div>
      <span class="artist-name">${artist.name}</span>
      <span class="artist-role">${artist.role}</span>
    `;

    card.addEventListener("click", () => {
      searchInput.value = artist.name;
      performSearch(artist.name);
      mainView.scrollTo({ top: 400, behavior: "smooth" });
    });

    artistsCarousel.appendChild(card);
  });
}

function renderTracklist(songsList) {
  tracklistRows.innerHTML = "";

  if (songsList.length === 0) {
    tracklistRows.innerHTML = `<div style="color:var(--text-subdued); padding: 24px; text-align: center;">No tracks found.</div>`;
    return;
  }

  songsList.forEach((song, i) => {
    const songIdx = songs.findIndex((s) => s.id === song.id);
    const isThisPlaying = currentSongIndex === songIdx && isPlaying;
    const isLiked = likedSongIds.has(song.id);

    const row = document.createElement("div");
    row.className = `track-row ${isThisPlaying ? "playing" : ""}`;
    row.dataset.songIndex = songIdx;

    row.innerHTML = `
      <div class="track-num">
        <span class="num-text">${i + 1}</span>
        <i class="bi ${isThisPlaying ? "bi-pause-fill" : "bi-play-fill"} row-play-icon"></i>
      </div>
      <div class="track-main">
        <img src="${song.poster}" alt="${song.title}" class="track-thumb" />
        <div class="track-details">
          <span class="track-title">${song.title}</span>
          <span class="track-artist">${song.artist}</span>
        </div>
      </div>
      <div class="track-album">${song.album}</div>
      <div class="track-actions">
        <button class="track-heart ${isLiked ? "liked" : ""}" title="Save track" data-id="${song.id}">
          <i class="bi ${isLiked ? "bi-heart-fill" : "bi-heart"}"></i>
        </button>
      </div>
      <div class="track-duration">${song.durationStr}</div>
    `;

    row.addEventListener("click", (e) => {
      if (e.target.closest(".track-heart")) return;
      if (currentSongIndex === songIdx && isPlaying) {
        pauseSong();
      } else {
        loadSong(songIdx, true);
      }
    });

    const heartBtn = row.querySelector(".track-heart");
    heartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLikeSong(song.id);
    });

    tracklistRows.appendChild(row);
  });
}

function syncAllUIActiveStates() {
  document.querySelectorAll(".song-card").forEach((card) => {
    const idx = parseInt(card.dataset.songIndex, 10);
    const playIcon = card.querySelector(".floating-play-btn i");
    if (idx === currentSongIndex) {
      card.classList.toggle("playing", isPlaying);
      if (playIcon) {
        playIcon.className = `bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`;
      }
    } else {
      card.classList.remove("playing");
      if (playIcon) {
        playIcon.className = "bi bi-play-fill";
      }
    }
  });

  document.querySelectorAll(".track-row").forEach((row) => {
    const idx = parseInt(row.dataset.songIndex, 10);
    const rowIcon = row.querySelector(".row-play-icon");
    if (idx === currentSongIndex) {
      row.classList.toggle("playing", isPlaying);
      if (rowIcon) {
        rowIcon.className = `bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"} row-play-icon`;
      }
    } else {
      row.classList.remove("playing");
      if (rowIcon) {
        rowIcon.className = "bi bi-play-fill row-play-icon";
      }
    }
  });
}

function updateHeroButtonState() {
  const isTumSeHiActive = currentSongIndex === 0;
  if (isTumSeHiActive && isPlaying) {
    heroPlayBtn.innerHTML = '<i class="bi bi-pause-fill"></i> Pause';
  } else {
    heroPlayBtn.innerHTML = '<i class="bi bi-play-fill"></i> Play Now';
  }
}

function performSearch(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    searchClear.style.display = "none";
    currentSongList = [...songs];
    tracklistTitle.innerText = "All Songs";
    renderPopularCards(songs);
    renderTracklist(songs);
    return;
  }

  searchClear.style.display = "block";
  tracklistTitle.innerText = `Search Results for "${query}"`;

  const filtered = songs.filter((s) => {
    return (
      s.title.toLowerCase().includes(q) ||
      s.artist.toLowerCase().includes(q) ||
      s.album.toLowerCase().includes(q)
    );
  });

  currentSongList = filtered;
  renderPopularCards(filtered);
  renderTracklist(filtered);
}

searchInput.addEventListener("input", (e) => {
  performSearch(e.target.value);
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  performSearch("");
  searchInput.focus();
});

heroPlayBtn.addEventListener("click", () => {
  if (currentSongIndex === 0 && isPlaying) {
    pauseSong();
  } else {
    loadSong(0, true);
  }
});

heroFollowBtn.addEventListener("click", () => {
  toggleLikeSong(1);
});

sidebarLikedRow.addEventListener("click", () => {
  document.querySelectorAll(".playlist-row").forEach((r) => r.classList.remove("active"));
  sidebarLikedRow.classList.add("active");

  const likedTracks = songs.filter((s) => likedSongIds.has(s.id));
  tracklistTitle.innerText = "Liked Songs";
  currentSongList = likedTracks;
  renderTracklist(likedTracks);

  mainView.scrollTo({ top: 380, behavior: "smooth" });
});

sidebarAllRow.addEventListener("click", () => {
  document.querySelectorAll(".playlist-row").forEach((r) => r.classList.remove("active"));
  sidebarAllRow.classList.add("active");

  tracklistTitle.innerText = "Top Bollywood Hits";
  currentSongList = [...songs];
  renderTracklist(songs);

  mainView.scrollTo({ top: 0, behavior: "smooth" });
});

brandHome.addEventListener("click", () => {
  searchInput.value = "";
  performSearch("");
  mainView.scrollTo({ top: 0, behavior: "smooth" });
});

navHome.addEventListener("click", () => {
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  navHome.classList.add("active");
  searchInput.value = "";
  performSearch("");
  mainView.scrollTo({ top: 0, behavior: "smooth" });
});

navSearch.addEventListener("click", () => {
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  navSearch.classList.add("active");
  searchInput.focus();
  mainView.scrollTo({ top: 0, behavior: "smooth" });
});

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    const filterType = chip.dataset.filter;
    if (filterType === "all") {
      renderPopularCards(songs);
      renderTracklist(songs);
      tracklistTitle.innerText = "All Songs";
    } else if (filterType === "playlists") {
      sidebarAllRow.click();
    } else if (filterType === "artists") {
      mainView.scrollTo({ top: 320, behavior: "smooth" });
    }
  });
});

popLeft.addEventListener("click", () => {
  popularCardsCarousel.scrollBy({ left: -360, behavior: "smooth" });
});
popRight.addEventListener("click", () => {
  popularCardsCarousel.scrollBy({ left: 360, behavior: "smooth" });
});

artistLeft.addEventListener("click", () => {
  artistsCarousel.scrollBy({ left: -360, behavior: "smooth" });
});
artistRight.addEventListener("click", () => {
  artistsCarousel.scrollBy({ left: 360, behavior: "smooth" });
});

fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.warn("Fullscreen request error:", err);
    });
  } else {
    document.exitFullscreen().catch((err) => {
      console.warn("Fullscreen exit error:", err);
    });
  }
});

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", openMobileSidebar);
}
if (sidebarCloseBtn) {
  sidebarCloseBtn.addEventListener("click", closeMobileSidebar);
}
if (sidebarBackdrop) {
  sidebarBackdrop.addEventListener("click", closeMobileSidebar);
}
if (mobileNavHome) {
  mobileNavHome.addEventListener("click", () => {
    closeMobileSidebar();
    document.querySelectorAll(".mobile-nav-item").forEach((n) => n.classList.remove("active"));
    mobileNavHome.classList.add("active");
    navHome.click();
  });
}
if (mobileNavSearch) {
  mobileNavSearch.addEventListener("click", () => {
    closeMobileSidebar();
    document.querySelectorAll(".mobile-nav-item").forEach((n) => n.classList.remove("active"));
    mobileNavSearch.classList.add("active");
    navSearch.click();
  });
}
if (mobileNavLibrary) {
  mobileNavLibrary.addEventListener("click", () => {
    if (spotifySidebar && spotifySidebar.classList.contains("mobile-open")) {
      closeMobileSidebar();
      document.querySelectorAll(".mobile-nav-item").forEach((n) => n.classList.remove("active"));
      mobileNavHome.classList.add("active");
    } else {
      openMobileSidebar();
    }
  });
}

document.querySelectorAll(".playlist-row").forEach((row) => {
  row.addEventListener("click", () => {
    closeMobileSidebar();
  });
});

function init() {
  updateGreeting();
  updateLikedCount();
  renderQuickGrid();
  renderPopularCards(songs);
  renderArtists();
  renderTracklist(songs);
  setVolume(50);
  loadSong(0, false);
}

document.addEventListener("DOMContentLoaded", init);
if (document.readyState === "complete" || document.readyState === "interactive") {
  init();
}
