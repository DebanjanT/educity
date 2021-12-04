import Link from "next/link";
import Head from "next/head";
import Typewriter from "typewriter-effect";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function index() {
  const [playedTime, setPlayedTime] = useState(null);
  const previewClick = () => {
    toast.success("Playing Educity Intro");
  };
  const stats = (playedSeconds) => {
    console.log(playedSeconds);
    var ptm = Math.floor(playedSeconds.playedSeconds);
    setPlayedTime(ptm);
  };
  return (
    <div data-theme="bumblebee">
      <Head>
        <title>Educity| City of learining</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="flex flex-col lg:flex-row bg-neutral">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <div className="my-6 indicator">
  <div className="indicator-item badge badge-primary">Beta</div> 
          <p className="font-bold text-4xl text-white lg:text-5xl mb-4">
            <span>🏠</span> City of{" "}
            <span className="text-primary">Learning</span> <br />
          </p>
          </div>
          
          <span className="text-coolGray-300 text-lg my-2">
            <code>[ @javascript / @Node.js / @any ]</code>
          </span>

          <div className="flex flex-wrap justify-center mt-4">
            <Link href="/signup">
              <div
                data-tip="Register Today"
                className="tooltip tooltip-bottom tooltip-info"
              >
                <button className=" shadow-lg px-8 py-3 m-2 text-lg font-semibold rounded bg-secondary text-coolGray-50 hover:bg-yellow-700 transition-all ease-out duration-500 hover:scale-105 ">
                  Join Today
                </button>
              </div>
            </Link>

            <button
              type="button"
              className="relative shadow-lg text-white px-8 py-3 m-2 transition ease-out duration-500 hover:scale-105 overflow-hidden font-semibold rounded border hover:border shadow hover:border-2 hover:border-secondary "
            >
              Features
              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center text-white shadow uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-secondary">
                Hot
              </span>
            </button>
          </div>
        </div>
        <div className="order-first lg:order-last  hidden lg:inline w-auto object-contain lg:my-auto overflow-hidden rounded-none  border-none lg:rounded-xl shadow-sm transition-all ease-in duration-300 hover:scale-105 hover:shadow-xl  lg:mr-4 bg-gradient-to-r from-secondary via-coolGray-100 to-secondary">
          <ReactPlayer
            url="https://misvecinos.s3.us-east-2.amazonaws.com/InVideo___Educitypprenderfs_1637429604700.mp4"
            className="rounded-full"
            playing={true}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
            controls
            light={true}
            onClickPreview={previewClick}
            onProgress={stats}
          />
          {playedTime > 1 && (
            <div className="flex justify-center align-center items-center">
              <p className="text-neutral text-center text-sm">
                00:{playedTime < 10 && 0}
                {playedTime}
              </p>
            </div>
          )}
        </div>
      </section>
      <section className=" text-coolGray-800">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-600">
                <h3 className="text-3xl font-semibold">Morbi tempor</h3>
                <span className="text-sm font-bold tracking-wider uppercase text-coolGray-600">
                  Vestibulum diam nunc
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-coolGray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Donec porta enim vel{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-coolGray-600">
                    Dec 2020
                  </time>
                  <p className="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci
                    scelerisque. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Aliquam sit amet nunc ut
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-coolGray-600">
                    Jul 2019
                  </time>
                  <p className="mt-3">
                    Morbi vulputate aliquam libero non dictum. Aliquam sit amet
                    nunc ut diam aliquet tincidunt nec nec dui. Donec mollis
                    turpis eget egestas sodales.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Pellentesque habitant morbi
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-coolGray-600">
                    Jan 2016
                  </time>
                  <p className="mt-3">
                    Suspendisse tincidunt, arcu nec faucibus efficitur, justo
                    velit consectetur nisl, sit amet condimentum lacus orci nec
                    purus. Mauris quis quam suscipit, vehicula felis id,
                    vehicula enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 sm:py-12 bg-coolGray-100 text-coolGray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">
              Top free courses by professionals
            </h2>
            <p className="font-serif text-sm text-coolGray-600">
              One stop learning place for coding{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-coolGray-50 rounded-md">
              <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img
                  alt=""
                  className="object-fit w-full h-52 bg-coolGray-500"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACpCAMAAACrt4DfAAAAwFBMVEUAAAB93/////9+4f+A5v9/5P9+4v+A5//b29t11PFvb28KCgq6urpYoLZovdd73vxMTExtxuFMi55ZWVlsxN8vV2NdqcDh4eFEfY4/c4M3ZXNyzuqampry8vIkRE5QkqZisso6OjqioqLIyMinp6cvLy+wsLAYLjVDe4wOHSIfO0M7bHsVKS/R0dGHh4dWVlYXFxd6enoLFhkqT1onSVMzXmyQkJArKystLS1lZWVQkKEMGh1Vm64UFBR0dHRERER6Idd3AAAM10lEQVR4nO1ca1viOhAGkzR2tVQqIBeBihcQvC2IHnbZ4///VyczSW80Zd3nrChp3g/HJZQ+7XtmJm9mJqlULCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsDMR4FgTt5u17Lh1Mht5wMv3oJ/qiaPc4ZYxx2hv+hoJu6HPGHHFtr7ObZ/tSuK1zUpUgjNaLKZgPXepUo0t5bYfP+DUwd1k1BULdmf7CNclcWGWN3T7o56OBhsIoZQ5R9lIf5C+b+Yooh1HhrnAp9Xb/tJ+JDgei3KC77KzrlCmyNkm4q0knJdQP281BM/CBYK6h1GC4YChR2BkPfbQXwd1z+qKO9D1CG5FzHvVI6nelQBeMyk8NtH3FSpCMhdKkeL2ZjE3hMjre2YN+PkLhSCzIDHlUEhObmoz7jp+dG1v5X5oNH7xtnh0b9Chy46LNNAnB8NXa+OWClssDB1z7vkPJVXVRqUzQxhy/m7tIsEz83Kix6Ajfcob58QXOcIR2A4hlVdrQrHnAd3l5FjhDQRXVSc55Aw2LoejKOR9iDb/NG5upgNjMn7VfhTxewuiD90RQxdof+XRfCjWYxu703w2VPCcFltMFqn583LN9MTREzGY/C76soWhw1gVfN+mWL81DXbBB5vrv1lRaFZ/ov0e1UJ5l4BaqhhCrpBjVpxoW5bIqjFXa5Ccuo4kvuWrqriiZA+K6RreQAx6qxJkqxnSXdGmpwjqKBU0qZQyrGUKFWm8jV67mt51yiYU1ULXMj7uYukOVgIscR5PxDMolQdt6y6hh4k4pz5DpM55b5KuJ6GpDM8oEGq9m6khcrjwBfNJ31cOMwFSXWVhieEq5nHTHzZWxu5EUNB1QetiI2XNfLme6s05nMul0Zktw01xonwvTI/XdPemnA1LkPPaiaTfwQlcWbhhUUQFUFSecXrhuL2PZgLJKm3IwFBCbqZgCb5c/wp4DFa64KJoDcQRtlPRaQXOuJsDyaAU5BZKw5WIZkBSylCZMMMap68FKG4RXaTBA1bRpSY4AS0F83KQRB8hnP/7uMAv9NAVEcebUQm8dBO0OYNIOgrUXNlTAynBG/FYpNOii5ae6NYRXsV4YAhFMm1lBWcpE1KecJXw51PdMl6HtHk9emLC614GlICZldAs+IQ7gcicU/3put3qpTg+H1wsyWkYgKrjLmEN6ajiAyMULYjUmGaLc1S14LlFGSahvau00UF0tRLhPC2SUWp/cAW969wPUWFL5a6IADX2m2KK+iZbVdZVFUSecqYK6fM+Qba2C3pGESc9BVTXv1JRArdKeNgG4z1C9GoS7AdpSNy6oN9MepkMbl9G4FoQFIEflfjf0qXJDs7S7LBsLonoxJbDkQw/M9wH9HAwyiff4igVPRbjKxJVkMdegYvOEywmvl5JDmDRuq+9S+YOp53IBd5gkWhYY9rv5NhhBFkpSc1J9sgPBqWaWbl2VIvCzksrjThT7E06AVrAmEvtfhCEGeJJPa+0n2rJXo7aRjwOO+BSEAvGPosF6opwID6PRO5gRaAfZ3cghT/EXhBthV+g+mg4EmM2cFgilJFNQz3QT0zAax+q8C3XnfJ7Zw5QgMyFeuUQfTZ65kqJJkm9IqxkkfgUmiOUc5yh3I4x2jgHpvgDLCTr/6CnlTiNCbrMd6mkS21FPtk4ZIFcGhCuQQvrmzYkS7/HsH9BNqpIQ5KoB7SLZY+nb7CuyUigLXxpVLLUauSRfYkSoQwuz6n5uatxDBFuKwWuWMSpFXRqp+Q5z76zAy6AGy7YI/r0A9jIWLNNuafbt86njFI8Y84pWih1qQHX+Byv+/z1j2UCtsaqEKvTOItLRdvc9ydDd0mdeRytK9jb08rEqjL5rSsW/5U57X52fg9DWp+2e+Ubo9nIVrsSp5E6vgj0jM7rFOfcHsMQlvq7xsxWlnCKh/cw3mCJxv1pTfcV0TWhTzA1q+uD3DGOsY7n5dsajOHkcRkO1DbNKGmEi39SlAMeYRSZ5Gb93CCRXuTUalk2RgjjK3GXnQCcW6zPc6dWr6nYGLPBHBoh1gRDXy7kJCuvEXcyvxOppwVJcOX5ML0r+Icj7XGAPuElbT2Xdk9cyIXmK2Rf8k0oXD9xocUN4Pd4EEKiwjZnjTC5nUJc7TcIPf4kdoSa3ZGV2IIEUgskPwn66gShwORTheS+xwjlmagKZ4kv3dsw9umU3zn7CQy8hzE/IgigFivIW03ZpEp/bw+zhEziJApvZ3N482ixfsBtnT9GVdYgqo550Q3Q8NCbMg27bY/uMfoc5Bj/xwEFL1amZb1h5a95S1S2H12CyQv+Tsdj9zdbtVEkH+7KEZ84nDa4aP0wJ6Gk0o+M6HOqHS5j/1HaH3xQCg6QMqJZJs5Cw6HCG2r4vZ/To9lQ5purgq0ZyEgWDX7A9aQyXxiId1SZVHSIOb2ia3w3BssFTgtyvBUvU2EBA0XzfiGJ65bY7rKUFKq8ZFqQ2MPV8GrcNweklbjjsYkFGr7exMsbas3XN5TTq6sAOEc+EGs1v0A2r6SQ69DTK5d1s+Ty9+zlHQzua/xxPF92JSigwll4eMj80ou73HsxyBQfginKOluMLoMVxmqvhILlGrPfeCSyjun66ZzFFGUIz7jDuuqQ4F2okVHFiAD2LcN7Z1n5sUoXGY+43vM5Y/nL/U1PvR5jafjWdDVsNn0U10RQkUYy4tVbQVXIed0OEn/bguwcK8OzQUoYvLwxriDDEhTRhWY05x+6FHT7qZ0NXDZabJVMJYaSKb5asMHVVIFcNBG5yCzdHa1lqsCsrL0zDgs28hmKp39UuNwCqtQqeBqYp4WPn7L4Xkt+Ptr7COWVYT0AVPpD/zudm8LdGJai24kfBVm1pSf5tpXLnFxWToSRdonMWvKKt2hifHLcyR1/MhXRAyfZOtgqP68IyqlPHLd5UazsD7ZRgLApP75DbRLCVsSgrMy3XYXtYeSk4vyrqnC06gHesP6fPVGyxqqg/hhSxUTKrKo5VYu5T7Qm9AipLFqvwTBh9JmUR7dUlRH/BslwzIGZStPm5jtw0I8+81HYsTgoOyjQUkATVvu5a7THBjhB9fR07ZMuTBtWeCVOp3MpTQWFvjSc50wQsLCCWZ7mMp+s6m4OdqtyFhebWlp6Yaxs+2tZobCLCvBeNa6oFRA0vFXEbZ/u3dT1WJgOCVTbBIjf2VZkbM3MnjwpwaCstVrEMUZ5QVVEtLXFg//lDniqQ2gIIkK1GVYe1Yg3m0XIdjF2JejY86P+57YSqBsH8jZRdU/XwObweQCJi2qLVjWasEgCzLA51e1AMlJqTt/Ip8zWN6jac+T42PBQc82EunqO2n6jYx+vafQDjMHWCDP6HmtkmtAXLdBeC8LDCJoTnkKb6jh1mbp9QIaYNrMPDoWd+a+vhXeO1S6njwGlftFaC/hcNFutGz+2Fw3e0IEzbrVq9HgblJMrCwsLCwsLCwsLC4gvg+gJw/Rc2YovbPOE/fn0/Hz2s/v8NvxrODhTuT//kZw+Xl9+zI0fiHv/CPy7VDV/+3kN+DRwexPj++6tjHB8cjLIjQNW3Sor7g8u/+ZxfAIKq/v39fR/e7Q9+dnNwcJ4dUVQ9iD/90fkx3O/trz7pp0NQdQx/X8SrPeLIycvVKDaw1fnV6OUk+nQhvnp4FdHoTXjZzdvJa+pGiirxRR8+/ur3/9nNG+wMEVW/lP88KQd6gMEH5UpnMl6rKHRcuThIXaSgqBL3O8TP17t9jx0goupJUQWeiN4oPpweRB8O1aUSo+tiqoDO44vPeJMPR0QVBBfhTyPBjXCcK+lGp/0r8d9v4ithVv+KP+fX1w9iavt1Ag548qhxwBVy2D/+kzliTwCm0u/HptNXE6H4m3hQHyP0vWAnHioM60C2xE3FMCRiof8q3/f7arU6FRELddbFw+gYfEpE9gM1hDgupKryGAmrwx2+xi4QU4WK8TVRWfDeb7FIklQlhraFKoHVTX8zlBkAjFXfD5SihHh9prCSxB0en/f/lKqKDHCGaVAZ1u+VYHzKCFEI7rA4PIuoeoy/2uaA8rO45f0HP/uOoWbAA6Uc++n1zaWyNWlVh+lInV/YvIlbrPBH8gZ9Q60KlQAIgxuI69evp2eHT8iHMIyLexmrHlAsvH7D64TBnSUy8/7y5eFMSgoIUofnL6O+obGqIqXjm3QjBRlvpAQFqpKF8GUkn9QcF00G8PFbcoOzz3urD8GZoipywX8UIX0g50YKpGNJFUY0YORXJVrkyHsoKXUG45WTiFHD3E+82empTABcnz6uUH0/nt/cjFRm7mR0c35RuTg9lYtAsVy+OleL59XVzVUU1lbiJ+dxzH99GIkF99OOXsDCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsKi5PgP5ZvGZpAL+nUAAAAASUVORK5CYII="
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-blue-600"
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-coolGray-50">
              <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img
                  alt=""
                  className="object-fit w-full h-52 bg-coolGray-500"
                  src="data:image/jpeg;base64,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"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-blue-600"
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                  <span>June 2, 2020</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-coolGray-50">
              <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img
                  alt=""
                  className="object-fit w-full h-52 bg-coolGray-500"
                  src="data:image/jpeg;base64,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"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-blue-600"
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                  <span>June 3, 2020</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-coolGray-50">
              <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img
                  alt=""
                  className="object-fit w-full h-52 bg-coolGray-500"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACvCAMAAADzNCq+AAAA+VBMVEX///8zMzNon2M+hj0uLi5rv0dZWVlzqmMrKyt1rGRxqGF2rmN3sGNtpV94sWJhm1xbmFV5tGF3tl0jIyN3d3dmn1tkZGR1t1lyuVWpqamwy65jmlhwu1FVlE72+vaqx6e+07zs8+xOkEk5OTkfHx8XFxd/f38ODg5WmkxISEgxgTAAAAB+rHrJycnl5eWcnJxYoknv7++7u7tWmU13qHPc59vo6OhPT0/Z2dmWupOysrJYpUjj7OLN3syVlZVubm4lfCOOtouGtn6HvXyZwI6wz6dop1LK38Sbx4yCwGu12alfuzSe0YxlvT6BrndTkE9UqEBFjz9ClzTcvb9iAAANQ0lEQVR4nO2da2OayhaGUUxqL27otqYNCYhGcjEmjVEaTbSp+9Ketrsnyfn/P+YAwwBzZYFmawLvhzaJMuDDmndua1BRnrbOT67O1n0Nm6x39ZqzPVn3VWyu3tUrldrRu0/rvo5Nlc+nUqk7n9d9IRsqxKdSaTZ3130pGynMp1LpHZRGzSrmUymNmqMEn8Coh+u+oA0Twac0akYUH9+oL9d9TZskhk+lclr6dCwOn/rtui9qg8ThU9te90VtkEo+cpV85Cr5yFXykavkI1fJR66Sj1wlH7lKPnKVfOQq+chV8pGr5CNXyUeuko9cJR+5Sj5ylXzkKvnIVfKRq+QjV8lHrpKPXCUfuUo+cq2Xz2T32vrXTpZLS/NZImFoeHvU7PVWk9fX+et1o72SkhTl7PAwStFYks9hzznImw/z+Sg490ry+v7++vrlS920ly9JOd926nVn+xz9thSf614zSMs7z3EZl/UmPp+zk6eAhL69ffv65YuXr/bMqrtcSd4dP6oFF3V0GNSMJficnfTCA8KyMmhy1UucsX50mPH4pNw/f//tjcfnxYvW3t5o0VmiKGW32YwuKqj5ufl8unVq8QfMlh3sGU+NPGezeZ3r8yiK9Z/3b9+GfF7t7e3po/w2FN1xJK/mTxg6QD6fHRJsFhehj0UFnOSyoR8f3v8e82ns+YR0O09Jyqcdh7prtV6PvVAIn+vIPOKjnB3YJoVL9thsBST07YOHJ8HHDyBPuWwobC7SlcpncsLD6rkIIPd1cuUITwwqIKHZ9/0P70k+DQSoldmGrpv8u5adD2sekVJdZPhOeCwqoA63IeufLR8PyedVKwTUymRDgjuehw/XPCL1TmQp+B97qSEMtqEfW1v7LJ9GGEAeIL01B9Ihmprl+FxWUsKw5ghT8C9rkBCuObcAG/q29Wt/n8sHB5AfQv+dQfDI73gWPjLziFR3PuY+FhWQakOz7z/96OHyiQLIA+TZUOrwTtRcZOeTZh6RmjVmyAE+FhUg9THrn5+/tsR84hrma2RI6ZD91KX4fMwQhvROoCzHBpL42I9fPp10PiGgVkNsQ9nuGhaXT6rxUGUkhxyXB1lDWGxD3/Z/bm3J+RA1rCWxIUBzwb00ls9kO5PD+6rjiYvz7MeiAjhbiTrfMR0ZnxYFqDWacmwo4x2PxfAZHub6hGjIMTnNRSco4Iq6EOPnr60MfDCeVqM1oivZObi5YETzOctqHlFBzq2i7OTG49kY6fPz/vEWiE+L5tNo9Mn+9Hke48Efi+QzPM3/Ab06lv9grx0ja9iie7efiU9UwxqtPtmOHea85b4oPtc5q2lYVP6DGT6D7p0J40MDaqh9crixTFRTfHaX4FM5WS0f8+4+G58wfsyi8DFNGB/KotWnyafW6zmy0jl87m6y8QlqmJmRT13qTln4eJ9QWpaUjzdWHw5lnbQmOZIL4ucOxoeoYWomPl7HS9qhgfPxnygwYWYlk5LwwXM9kk4+zWfk8TEvYHz0GFA3Cx+0miIbTYP5NCtB/+TsQDzGE/JJDtKFF8PwGY1iB0rjEwNSM/CJ5tHFszFAPol5jF1hHTlRDrinoOaaBZMMNJ/jkU/oAsgHA+rC+dSdxDqMaEIaxId8FMXwUFBH+HxqFWaS8DMvBik+fwR8RuZ+Jj66CuVTcw6JcdqQP68I4dO7ouYfvFEo5231Wy6fJmeK8SPnNAwfBOgYxsfU4/CB8Gmy68CTE04IAfhE81edhWaHP16yEVA7nfD41LmrpZwAYvkEhFAApfMJAKHwAfCp7fCu6oTzxlQ+0TvaulbVx+Fi0y1dVDDJxeHDX2zlvZHDxyd0nIGPGvIhx18cPvy7tp2LD0Jta1rVl44Wm+hHwaAJoFXyuTgOCd3D+HiAzPXxmerVUJrJ8IkmEB+Dz/EIxqdr4vBZCx8N86nqFsknkfPyKHyOb2Dx0/W0gXzCjuPq+USAunA+iNAG8SEXwFbLBxNSHzLw8QltDB/6GWar5hMQelDV/Sx8PEIbwodZuFohnz9vLkJCXoUJAuip8OmGfDgLn4/BJ3DcexgfdW18LNzAa9Vg9eTylPfwu0fg8xDweQDyUdfFR1FmA4+QFo0wPvEyN1bK5+YmCh9VvdlYPpUKfnFeNXlrk4/Hx9MD7vPtfwDxUWF8KnVOIvduvvFpLc7GTMtjWzkfHD6qegGLHygftm3hz/xB4geeFL5KPvc+HzUWMH5UIB+qb3IumDmGzR/WgUnhq+ZzkeBzDOSjmjA+RFKEMK0MOv8MSwpfNR9VpQIIwqdrAvlEYyNJPit8/QKSFL5SPvf3DwSfByAfL4CgfCoV52pyJstnzbD+Bdhaslo+ZPioKrB+eQ4E5+Mv6klfzrJ+mrq1ZLV8Hig+D0A+ahY+Kcq4vlyX73Bbrf+otL4C+YD9Z+V8UmwIzoe9ZIYPg8erYTA+6fMbj8dHakMcPqfc3NRD9jwUnx//4/D5CuPzxSaKul0iP6pOLnScQRL16o7Ihhg+tVNu/riisG0Gxcfq9zmAQHz6Gnmuy6P8fI6occgVKMFFZEM0H4deWYzFLFNTfBRr8IXlc5zOp/9lSp8LvJuJVo3N7j+EJWjybYjkw0mtT35+6kysUbkaS+htGp8vY84gUTR6SKHD/Q4MYFlcG0ryEWzNEJ6JZ+S2SleykZxP/06QQH+WPW29KdqsLe1QJgEwwXcS4wN9u0ZyzMxv6KZfKEK/SfiofVt8rozbHqS3F7jBjvkeH8ynJjEeUrENCQZ4nTFZybpiPn3GeAgJ8044Sr29QEtzyOYv5JNcEksVtiHhANi9I0Loq4DPA894SIF3TgBuL3Cf3SlxUMCn3kszHlKhDUkmCGyirefy6eqgDYSgfRjA2wuwIXp32wHUeKgz+TYknUBJ2tCI5WOm7PxKKNWGMnzrzrV8k6TXhFFhuNMDGw+p3WbzVHrTkjb05g3F5zhlWpyQfB9Y7eg2y+2Vbdfk7K4dfs77/JLhx7TNzPMuDqERGT/AnaexJBuY5VuOedct2uCd/yERuWVgG0ryGYF3LickShHNsOM8EnfXZnrn7zFkLVAl60Z8JFtOO64rqXWcipH7674Y0/cGqGv6arVZNSD06iXic/yXCIE71j1JfIlun2FbzQUiTH/5R/gso8CGugEfsfF0FnqQL6BpknaNsKGcT0zBSpj+kiUtL8Nr6xsvXjQa30TvaOtRNkWYLsBXNExImRaFaHKFenG8hdl/WZ4N9V9//Vv0Ms4kxQmlA0nzFgwTxPNZmXRZcXprsWVWM8OWGA/CMnajlFuJDZ3fOquzi7OzDX9AX5SGg/JMyN8EGhboWzyN0JZ1nEAfJOWk2VBRNK8SKeySPxZRs9B4tDH1vC0mqIoomdWAbOh5K4oRflOFbUinY6sYijxG3NUpsA0B26iC2pA1NRGd1AdFWgtsQwTHebudduQTlq2n95EjJfrW+E/W2Jh17OWfdLuZctONh1Q85Aj/MO6483lHGWecgnwacs3sneNwbK+Ng9/subKYGqZiDR7pEteq0HjAaxeBOsiG0MzQwFIWrmJaynPkM9ehxkPKHQch5P849neOml6LNn2Gzb7hfUwt17jT340UbNPyekN+/ASgnp0M/Ckzy/aP9CNm3lYGc6VrufKl+6cpDp/ObJZoiebtxdhv4caL9px4nx0dubC9fyy3uukTW3nE8ul09cBNfFltLZqG1jRdTzpMzEdpjw17kf7k1qcoDh9/ixri42rxjkfEyIzbOTt5pDt/ht7sS8YHd42QEKG4I2Dndq6nJBkf1MfRBm3DMNrTMappJh5GFJ6P/5IXL9GLVjsAhnuBheczjnrIWKgzGTpN4fkE4UMCWPi9SRv9XPJh+czjtq3k4/OhZ+MHg8E4/FPh+SyCABrYgmmdwvOZh1OpujaeGvMZjaLwfJRBnOHiDy60gZGcQi35KIvogWAhpuQIrOTjVbGBrpFjMC36Sr6ST/DbvD2o6noCE14DKvlEsmaubSyqeBkIvb3kQ8uyg6WgcDq26HyM6XTKrGoMqhG8ovMJGnX67XN/AIbmmYvOxw8VnV4z9qGU8RMgaPsoFtTbgwE8qnVF5+PqVcao7WACCA3Iis4HDS+0qoG3qMzsIElICycQC8+ng8enXu8w/Ldazh8m+j8zenknoFXOz0e2Y011jaIzKMenyf5zxxgHYy8NzXBME3NlJR8ky53bhtE2bGqJtBh8Eh2+UOLxF6HOgJ2+f4aa6XRyHYwPWit8jhk/lNAkaiI5cwbgE6Zowp638LRl4fRVnGPXTqwB8hWl+BYjSxzvPEFL7WgIIcllFqSIP2NFmwv0wQJFkyZ+s2EWcIsB3nkS/ife0V3YLSpGoqesiZolt8BbnKy2roU1h570we8o+hY521+iGE8FsYH3NplFMh6wCms8fLltAkPUwhXQeDhyF3pyx0rhjYdUB80URoMyI5wmM9vPfjQKU7g3B3lNvG+3NJ5INm7q23gwUT5bglBkOXhotu4L2jjhJis5tC+VFKpkGnjfbvFkjKvVxYYZz/8BgbFSXQmK13cAAAAASUVORK5CYII="
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-blue-600"
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
