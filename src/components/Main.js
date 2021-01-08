import Songs from './Song.js';

function Main({ songs }) {
    return (
        <main>
            <Songs
                songs={songs}
            />
        </main>
    );
}

export default Main;

