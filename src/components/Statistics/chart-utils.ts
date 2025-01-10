export const colors = ['#0FA6F3', '#FE6D59', '#FBB410', '#9C56B8', '#58DB93', '#3E76E5', '#FFE231', '#18B99B'];

export function getBackground(index: number): string {
    if (index > colors.length - 1) {
        return getBackground(index - colors.length);
    }
    return colors[index];
}

export function getForeground(hexcolor: string) {
    const r = Number.parseInt(hexcolor.substring(1, 3), 16);
    const g = Number.parseInt(hexcolor.substring(3, 5), 16);
    const b = Number.parseInt(hexcolor.substring(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    // yiq >= 128 was recommended but 160 looks better
    return yiq >= 160 ? 'black' : 'white';
}
