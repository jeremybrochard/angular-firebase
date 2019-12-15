import { ResourcesService } from '../providers/resources.service';

export function ResourcesFactory (rsc: ResourcesService) {
    return () => rsc.load();
}
