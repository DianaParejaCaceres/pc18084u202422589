export class Artwork {
    /**
     * Creates an instance of Artwork.
     * @param {Object} props
     */
    constructor({ id = 0, title = '', artistDisplay = '', dateDisplay = '', mediumDisplay = '', imageId = '' } = {}) {
        if (!title) throw new Error('Artwork title must be a non-empty string');

        this.id = id;
        this.title = title;
        this.artistDisplay = artistDisplay;
        this.dateDisplay = dateDisplay;
        this.mediumDisplay = mediumDisplay;
        this.imageId = imageId;
    }
    get imageUrl() {
        const baseUrl = import.meta.env.VITE_ART_IIIF_BASE_URL || 'https://www.artic.edu/iiif/2';
        return this.imageId ? `${baseUrl}/${this.imageId}/full/843,/0/default.jpg` : 'https://placehold.co/600x400?text=No+Image';
    }
    get detailsUrl() {
        return `https://www.artic.edu/artworks/${this.id}`;
    }
}