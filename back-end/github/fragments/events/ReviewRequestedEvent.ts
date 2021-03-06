/*
 *  Author: Hudson S. Borges
 */
import Fragment from "../../Fragment";
import { SimplifiedActorFragment } from "../ActorFragment";

export class ReviewRequestedEvent extends Fragment {
  code = "reviewRequestedEvent";

  get dependencies(): Fragment[] {
    return [SimplifiedActorFragment];
  }

  toString(): string {
    return `
      fragment ${this.code} on ReviewRequestedEvent {
        actor { ...${SimplifiedActorFragment.code} }
        createdAt
        requestedReviewer { ...${SimplifiedActorFragment.code} }
      }
    `;
  }
}

export default new ReviewRequestedEvent();
