const TASKS = document.querySelectorAll("task");

class Task
{
    /**
     * 
     * @param {string} title 
     * @param {"XS"|"S"|"M"|"L"|"XL"} size 
     * @param {string} story 
     * @param {string} requirements 
     * @param {Element} element
     */
    constructor(title, size, story, requirements, element)
    {
        /**
         * @type {string}
         */
        this.title = title;
        /**
         * @type {"XS"|"S"|"M"|"L"|"XL"}
         */
        this.size = size;
        /**
         * @type {string}
         */
        this.story = story;
        /**
         * @type {string}
         */
        this.requirements = requirements;
        /**
         * @type {Element}
         */
        this.element = element;
    }

    createDOMNode()
    {
        const wrapper = document.createElement("div");
        const parent = document.createElement("div");
        parent.className = "task";
        wrapper.appendChild(parent);
        const tasklegend = document.createElement("div");
        tasklegend.innerText = "TASK";
        tasklegend.className = "task-legend";
        parent.appendChild(tasklegend);
        const titleAndSize = document.createElement("div");
        titleAndSize.className = "task-title-size";
        parent.appendChild(titleAndSize);
        const title = document.createElement("div");
        title.className = "task-title";
        title.innerText = this.title;
        titleAndSize.appendChild(title);
        const size = document.createElement("div");
        size.className = "task-size";
        size.innerText = "Size: " + this.size;
        size.setAttribute("size", this.size)
        titleAndSize.appendChild(size);

        const storyContainer = document.createElement("div");
        storyContainer.className = "task-story-container";
        const storyTitle = document.createElement("div");
        storyTitle.className = "task-story-title";
        storyTitle.innerText = "User Story";
        storyContainer.appendChild(storyTitle);
        const story = document.createElement("div");
        story.className = "task-story";
        story.innerText = '"'+this.story+'"';
        storyContainer.appendChild(story);

        //create a requirements container
        const requirementsContainer = document.createElement("div");
        requirementsContainer.className = "task-requirements-container";
        const requirementsTitle = document.createElement("div");
        requirementsTitle.className = "task-requirements-title";
        requirementsTitle.innerText = "Acceptance Criteria";
        requirementsContainer.appendChild(requirementsTitle);
        const requirements = document.createElement("div");
        requirements.className = "task-requirements";
        requirements.innerText = this.requirements;
        requirementsContainer.appendChild(requirements);

        //create a container, containing both the story and requirements
        const storyAndRequirements = document.createElement("div");
        storyAndRequirements.className = "task-story-requirements";
        storyAndRequirements.appendChild(storyContainer);
        storyAndRequirements.appendChild(requirementsContainer);

        //add the story and requirements container to the parent
        parent.appendChild(storyAndRequirements);
        return wrapper.innerHTML;
    }

    replaceElement()
    {
        const domHTML = this.createDOMNode();
        this.element.outerHTML = domHTML;
    }
}

/**
 * @param {NodeListOf<Element>} tasks
 * @returns {Task[]}
 */
function exportTasks(taskList)
{
    let tasks = [];
    for (let task of taskList)
    {
        let title = task.querySelector("title").innerText;
        let size = task.querySelector("size").innerText;
        let story = task.querySelector("story").innerText;
        let requirements = task.querySelector("reqs").innerText;
        tasks.push(new Task(title, size, story, requirements, task));
    }
    return tasks;
}

const taskObjects = exportTasks(TASKS);
taskObjects.forEach(task => task.replaceElement());