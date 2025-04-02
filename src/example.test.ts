import { Entity, Enum, ManyToOne, PrimaryKey, PrimaryKeyProp, Ref } from '@mikro-orm/postgresql';

export enum PermissionName {
	READ = 'READ',
	WRITE = 'WRITE',
	DELETE = 'DELETE',
	UPDATE = 'UPDATE',
}

@Entity()
export class Permission {
	[PrimaryKeyProp]?: ['name'];

	@Enum({ items: () => PermissionName, nativeEnumName: 'permission_name', primary: true })
	name: PermissionName;
	
	constructor(name: PermissionName) {
		this.name = name;
	}
}

@Entity()
export class User {
	@PrimaryKey()
	id!: number;

	@ManyToOne(() => Permission)
	requiredPermission: Ref<Permission> | null = null;
}

