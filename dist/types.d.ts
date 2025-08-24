export interface Event {
    title: string;
    year: number | string;
    imageURL: string;
    shortDescription: string;
    description: string;
}
export interface TimelineRenderer {
    renderTimeline(data: Event[]): void;
}
export interface ModalHandler {
    openModal(event: Event): void;
}
//# sourceMappingURL=types.d.ts.map