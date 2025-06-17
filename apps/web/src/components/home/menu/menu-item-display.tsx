import type { MenuItem } from "@/data/menu";

type MenuItemDisplayProps = {
  menuItem: MenuItem;
};

export function MenuItemDisplay({ menuItem }: MenuItemDisplayProps) {
  return (
    <div key={menuItem.id} className="flex flex-row justify-between">
      <div>
        <p className="text-brand">{menuItem.name}</p>
        <p className="text-brand opacity-50">{menuItem.nameJapanese}</p>
        <p className="opacity-75">{menuItem.description}</p>
      </div>
      <p className="text-brand w-fit whitespace-nowrap">{`৳ ${menuItem.price}`}</p>
    </div>
  );
}
