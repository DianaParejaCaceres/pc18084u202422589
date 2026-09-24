import { reactive } from "vue";
import{ ArtworksApi } from "@/art-inventory/infrastructure/artworks-api.js";
import { ArtworkAssembler } from "@/art-inventory/infrastructure/artwork.assembler.js";

const artworksApi = new ArtworksApi();
const artworkAssembler = new ArtworkAssembler();
export const artworksStore = reactive({
    artworks: [],
    errors: [],
    loading: false,
    async loadArtworks(gallery = "impressionism") {
        this.loading = true;
        this.errors = [];
        try {
            const response = gallery === 'modern'
                ? await artworksApi.getModernArtworks()
                : await artworksApi.getImpressionismArtworks();
            this.artworks = artworkAssembler.toEntitiesFromResponse(response);
        } catch (error) {
            this.errors.push(error);
            console.error("Error loading artworks:", error);
        } finally {
            this.loading = false;
        }
    }
});