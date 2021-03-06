import Carousel from './carousel';
import Vimeo from './vimeo';

function SectionLink(props) {
    if (props.link) {
        return (
            <p>
                <a href={props.link} class="f5 no-underline green bg-animate hover-bg-green hover-white inline-flex items-center ph3 pv2 ba border-box">
                    <span class="pr1 f4">{props.text}</span>
                    <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32" fill="currentcolor">
                        <title>chevronRight icon</title>
                        <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                    </svg>
                </a>
            </p>
        )
    }
    return (null);
}

function VideoOrImages(props) {
    if (props.video) {
        return (
            <Vimeo video={props.video} />
        )
    } else {
        return (
            <Carousel images={props.images} />
        )
    }
}

const HomeSection = props => (
    <section id={props.id}>
        <article class="cf center w-90 pt4 pb4">
            <div class="left fl-ns w-two-thirds-ns tc ph4-ns">
                <VideoOrImages video={props.video} images={props.images} />
            </div>
            <div class="right fl-ns center w-third-ns tl relative">
                <h2 class={`absolute f3 fw4 firasans bg-white ${props.color}`}>{props.title}</h2>
                <p class="pt5 lato lh-copy f4" dangerouslySetInnerHTML={{ __html: props.text }}></p>
                <SectionLink link={props.link} text={props.linktext} />
            </div>
        </article>
    </section>
)

export default HomeSection;