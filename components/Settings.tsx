'use client'
import {NextUIProvider} from "@nextui-org/react";
import {Input, Checkbox, Button, Link} from "@nextui-org/react";

const Settings = () => {
  return (
    <NextUIProvider>
      <div className="container m-auto p-4">
        <h1 className="mb-10 text-center text-2xl">設定</h1>

        <div className="mb-10">
          <div className="flex mb-6">
            <label className="w-1/4">出題範囲</label>
            <div className="flex-1 flex flex-wrap gap-4">
              <Checkbox>一の段</Checkbox>
              <Checkbox>ニの段</Checkbox>
              <Checkbox>三の段</Checkbox>
              <Checkbox>四の段</Checkbox>
              <Checkbox>五の段</Checkbox>
              <Checkbox>六の段</Checkbox>
              <Checkbox>七の段</Checkbox>
              <Checkbox>八の段</Checkbox>
              <Checkbox>九の段</Checkbox>
            </div>
          </div>

          <div className="flex mb-6">
            <label className="w-1/4">成績</label>
            <div className="flex-1 flex flex-wrap gap-4">
              <Input type="text" label="チャレンジ回数" className="w-48"/>
              <Input type="text" label="正解" className="w-48"/>
              <Input type="text" label="不正解" className="w-48"/>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <Button href="/" as={Link}color="primary" size="lg">戻る</Button>
          <Button color="danger" size="lg">成績のリセット</Button>
        </div>
      </div>
    </NextUIProvider>
  )
}
export default Settings;