import ClipboardJS from "clipboard"
export function shearPlate(value:any,el:any){
    if(!el.target){
        return
    }
    var clipboard = new ClipboardJS(el.target, {
        text: function (trigger) {
            return value;
        },
    })
    clipboard.on("success", function (e) {
        console.log(e, "复制成功")
        clipboard.destroy()

    })
    clipboard.on("error", function (e) {
        console.log(e, "复制失败")
        clipboard.destroy()
    })
    // @ts-ignore
    clipboard.onClick(el)
}