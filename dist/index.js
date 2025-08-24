import { getData } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";
getData().then(events => {
    renderTimeline(events);
});
//# sourceMappingURL=index.js.map