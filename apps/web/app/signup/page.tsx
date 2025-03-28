import Link from "next/link";
import Form from "../_components/Form";
import FormRow from "../_components/FormRow";
import Input from "../_components/Input";
import FlexBox from "../_components/FlexBox";
import logo from "../../public/noBGLogo.png";
import Image from "next/image";
import ProviderButton from "../_components/ProviderButton";
import AuthRightSide from "../_components/AuthRightSide";

function page() {
  async function action() {
    "use server";
  }

  return (
    <main className="grid min-h-[50rem] grid-cols-[44rem_1fr] text-gray-900">
      <FlexBox className="border-secondary/20 flex-col border px-10 py-6">
        <FlexBox className="items-center gap-1">
          <Image
            src={logo}
            alt="logo of the company"
            priority
            className=""
            height={50}
            width={50}
          />
          <h2 className="text-2xl font-semibold">Pixel Sync</h2>
        </FlexBox>
        <Form action={action}>
          <h1 className="mb-2 text-[2.5rem]">Get started</h1>

          <h3 className="mb-12 text-lg text-gray-700">Create a new account</h3>

          <ProviderButton icon="line-md:github-loop">
            Continue with Github
          </ProviderButton>

          <ProviderButton icon="flat-color-icons:google">
            Continue with Google
          </ProviderButton>

          <FlexBox className="mt-8 items-center gap-3">
            <div className="w-full border-b border-gray-300"></div>
            <span className="text-xl">or</span>
            <div className="w-full border-b border-gray-300"></div>
          </FlexBox>

          <FormRow label="Username">
            <Input />
          </FormRow>

          <FormRow label="Email">
            <Input />
          </FormRow>

          <FormRow label="Password">
            <Input type="password" />
          </FormRow>

          <FormRow label="Reapeat password">
            <Input type="password" />
          </FormRow>

          <button className="bg-brand-400 hover:bg-brand-500 border-brand-600 mt-14 w-full cursor-pointer rounded-lg border py-3 text-2xl text-gray-700 transition-all duration-300">
            Sign Up
          </button>

          <FlexBox className="mt-5 justify-center gap-2 text-xl">
            <p>Already have an account?</p>
            <Link
              href="/signin"
              className="text-cyan-500 underline hover:no-underline"
            >
              Sign In Now
            </Link>
          </FlexBox>
        </Form>
      </FlexBox>

      <AuthRightSide />
    </main>
  );
}

export default page;
