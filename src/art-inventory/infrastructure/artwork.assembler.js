import { Artwork } from "@/art-inventory/domain/model/artwork.entity.js";
export class ArtworkAssembler {
    toEntitiesFromResponse(response) {
        if (!response || !response.data) {
            console.error('Invalid response received');
            return [];
        }
        const resourcesData = Array.isArray(response.data.data) ? response.data.data : [];

        return resourcesData.map((resource) => {
            try {
                return this.toEntityFromResource(resource);
            } catch (error) {
                console.error('Validation error for artwork:', error.message, resource);
                return null;
            }
        }).filter(resource => resource !== null);
    }
    toEntityFromResource(resource) {
        return new Artwork({
            id: resource.id,
            title: resource.title,
            artistDisplay: resource.artist_display || '',
            dateDisplay: resource.date_display || '',
            mediumDisplay: resource.medium_display || '',
            imageId: resource.image_id || ''
        });
    }
}